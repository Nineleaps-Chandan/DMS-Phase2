import React, { Component } from "react"
import axios from "axios"

class Cards2 extends Component {
    state = {
        file: null,
        selectedFileType: ""

    }

    handleFile(e) {
        console.log(e.target.files, "$$$")
        console.log(e.target.files[0], "$$")
        let file = e.target.files[0]
        this.setState({
            file: file,
            selectedFileType: this.state.selectedFileType
        }
        );

        console.log("Chandan", this.state.selectedFile);


    }
    handleUpload(e) {
        let file = this.state.file
        let formdata = new FormData()

        formdata.append('image', file)
        formdata.append('name', 'Chandan Singh')

        console.log(this.state, "the state---$$");

        axios({
            url: "http://192.168.3.13:8080/upload",
            method: "post",
            // headers: {
            //     authorization: `your token`
            // },
            // params: {
            //     data: formdata

            // }
            data: formdata

            //handle response later

        }, (err) => {
            //handle error
            console.log("!!")

        })
        var data = new FormData();
        console.log("file data", this.state.selectedFileType);
        data.append("file", this.state.selectedFile);
        data.append("name", "test");
    }



    render() {
        return (
            <div className="Cards">
                <form>
                    <div className="">
                        <label>Select File</label>
                        <input type="file" multiple name="files" onChange={(e) => this.handleFile(e)} />
                    </div>
                    <button type="button" onClick={(e) => this.handleUpload(e)}>Upload</button>
                </form>

            </div>
        )
    }




}

export default Cards2;


