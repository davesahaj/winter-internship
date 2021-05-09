import React from "react";
import { Helmet } from "react-helmet";
import "./Searchengine.css";
import ButtonLight from "../../../components/ButtonLight/ButtonLight";
import Switchbox from "../../../components/Switchbox/Switchbox";
import Titletext from "../../../components/Titletext/Titletext";
import Linetext from "../../../components/Linetext/Linetext";

const Searchengine = () => {
  return (
    <div class="container-fluid mt-3 admin-div shadow">
      <Helmet>
        <title>Manage Search Engines</title>
      </Helmet>
      <div class="row align-content-center">
        <div class="d-flex flex-col w-100 ">
          <div class="col-12 p-2">
            <Titletext text="Manage search engines" />
          </div>
        </div>
      </div>

      <div class="row align-content-center p-5">
        <div class="d-flex flex-col w-100 ml-5">
          <div class="row col-12">
            <div class="col-8 p-2">
              <Linetext text="Google" />
            </div>
            <div class="col-4 p-2">
              <Switchbox />
            </div>
          </div>
        </div>
        <div class="d-flex flex-col w-100 ml-5">
          <div class="row col-12">
            <div class="col-8 p-2">
              <Linetext text="Bing" />
            </div>
            <div class="col-4 p-2">
              <Switchbox />
            </div>
          </div>
        </div>
        <div class="d-flex flex-col w-100 ml-5">
          <div class="row col-12">
            <div class="col-8 p-2">
              <Linetext text="DuckDuckGo" />
            </div>
            <div class="col-4 p-2">
              <Switchbox />
            </div>
          </div>
        </div>
      </div>

      <div class="row align-content-center">
        <div class="d-flex flex-col w-100 justify-content-end">
          <div class="col-2 p-2">
            <ButtonLight text="Apply" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searchengine;
