import React from "react";
import Scanservice from "../Scanservice";

class Farmer extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeSearch = this.onChangeSearch.bind(this);
    this.searchTitle = this.searchTitle.bind(this);
    this.state = {
      scanresult: [],
      searchTitle: "",
    };
  }

  onChangeSearch(e) {
    const searchTitle = e.target.value;
    this.setState({
      searchTitle: searchTitle,
    });
  }

  searchTitle() {
    Scanservice.farmerService(this.state.searchTitle).then((response) => {
      this.setState({ scanresult: response.data });
      console.log("scanresult", this.state.scanresult);
    });
  }

  render() {
    const { searchTitle, scanresult } = this.state;
    return (
      <div className="Appx">
        <div className="relative flex justify-center pt-12 lg:pt-30 px-8 py-10">
          <div className="rounded-lg shadow-xl p-20 form">
            <label className="text-2xl text-white-100 font-bold cursive">
              Farmer Details{" "}
            </label>
            <input
              placeholder="Enter any Farmer Name"
              value={searchTitle}
              onChange={this.onChangeSearch}
            />
            <button
              type="submit"
              className="text-3xl text-white-100 cursive"
              onClick={this.searchTitle}
            >
              Search
            </button>
          </div>
          <div className="rounded-lg shadow-3xl p-20 ml-10 form ">
            <label className="text-3xl text-white-100 font-bold cursive">
              Farmer details
            </label>
            <div>
              {scanresult.map((scanresult, index) => (
                <div key={scanresult.donorUserName}>
                  Farmer : {scanresult.donorUserName}
                  <br />
                  Email : {scanresult.email}
                  <br />
                  Registered Date : {scanresult.registeredDate} <br />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Farmer;
