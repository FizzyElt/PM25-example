package main

import (
	"fmt"
	"io/ioutil"
	"net/http"
	"net/url"
)

const baseURL = "https://data.epa.gov.tw/api/v1/aqx_p_02"
const Token = "<your token>"

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("hello world"))
	})
	http.HandleFunc("/pm25", PM25handler)
	http.ListenAndServe(":9000", nil)
}
func PM25handler(w http.ResponseWriter, r *http.Request) {
	body := GetPM25()
	w.Header().Add("Access-Control-Allow-Origin", "*") //CORS
	w.Write(body)
}
func GetPM25() []byte {
	//create request
	req, err := http.NewRequest("GET", baseURL, nil)
	if err != nil {
		fmt.Println(err)
	}

	// set query
	q := url.Values{}
	q.Add("api_key", Token)
	q.Add("limit", "100")
	req.URL.RawQuery = q.Encode()

	//get data
	res, err := http.Get(req.URL.String())
	if err != nil {
		fmt.Println(err)
	}
	defer res.Body.Close()
	body, err := ioutil.ReadAll(res.Body)
	if err != nil {
		fmt.Println(err)
	}
	return body
}
