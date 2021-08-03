import React from "react";
import Scanservice from "../Scanservice";

class Information extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeSearchd = this.onChangeSearchd.bind(this);
    this.searchTitled = this.searchTitled.bind(this);
    this.state = {
      scanresultd: [],
      searchTitled: "",
    };
  }

  onChangeSearchd(e) {
    const searchTitled = e.target.value;
    this.setState({
      searchTitled: searchTitled,
    });
  }

  searchTitled() {
    Scanservice.scanDomainService(this.state.searchTitled).then((response) => {
      this.setState({ scanresultd: response.data });
      console.log("scanresult domain", this.state.scanresultd);
    });
  }

  render() {
    const { searchTitled, scanresultd } = this.state;
    return (
      <div className="Appx">
        <div className="relative flex justify-center pt- lg:pt-30 px-8 py-10">
          <div className="rounded-lg shadow-2xl p-20 form">
            <label className="text-3xl text-white-100 font-bold cursive">
              Equipment Details
            </label>
            <input
              placeholder="Enter Equipment Details"
              value={searchTitled}
              onChange={this.onChangeSearchd}
            />
            <button
              type="submit"
              className="text-3xl text-white-100 cursive"
              onClick={this.searchTitled}
            >
              Search
            </button>
          </div>
          <div className="rounded-lg shadow-3xl p-20 ml-10 form ">
            <label className="text-3xl text-white-100 font-bold cursive">
              Equipment details
            </label>
            <div>Info: {scanresultd["Alexa domain info"]}</div>
            <div>Category: {scanresultd["sophos category"]}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Information;
