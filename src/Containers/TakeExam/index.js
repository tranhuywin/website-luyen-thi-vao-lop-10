import React, { useState } from "react";
import Item from "../../Components/List/Item";

export default function SelectExam() {
  const ListExam = [
    { link: "ten link1", ten: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor." },
    { link: "ten link2", ten: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor." },
    { link: "ten link3", ten: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor." },
    { link: "ten link4", ten: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor." },
    {
      link: "ten link5",
      ten: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
    },
    { link: "ten link6", ten: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor." },
  ];

  return (
    <>
      <div>
     
        <div className="form-group">
          <div className="form-inline">
            <label className="my-1 mr-2" htmlFor="selectExamPlace">
              Nơi ra đề
            </label>
            <select className=" my-1 mr-sm-2 form-control" id="selectExamPlace">
              <option value="Bộ Giáo Dục">Bộ Giáo Dục</option>
              <option defaultValue value="THCS Kim Long">
                THCS Kim Long
              </option>
              <option value="THPT Trần Phú">THPT Trần Phú</option>
              <option value="THPT Nguyễn Trãi">THPT Nguyễn Trãi</option>
            </select>
           
            <label className="my-1 mr-2" htmlFor="selectExamTime">
              Thời gian
            </label>
            <select className="custom-select my-1 mr-sm-2" id="selectExamTime">
              <option value="15p">15p</option>
              <option value="30p">30p</option>
              <option defaultValue selected value="45p">
                45p
              </option>
              <option value="90p">90p</option>
              <option value="120p">120p</option>
            </select>
            <label className="my-1 mr-2" htmlFor="selectSubjects">
              Môn
            </label>
            <select className="form-control" id="selectSubjects">
              <option defaultValue>Toán</option>
              <option>Ngữ văn</option>
              <option>Anh văn</option>
            </select>
            <label className="ml-1 mr-2" htmlFor="selectSchoolYear">
              Năm học
            </label>
            <select
              className="custom-select my-1 mr-sm-2"
              id="selectSchoolYear"
            >
              <option defaultValue selected>
                2020-2021
              </option>
              <option value="2019-2020">2019-2020</option>
              <option value="2018-2019">2018-2019</option>
              <option value="2017-2018">2017-2018</option>
            </select>
            <button type="submit" className=" btn btn-primary">
              Lọc
            </button>
          </div>
        </div>
        <div>
          {ListExam.map(function (value) {
            return <Item name={value.ten}></Item>;
          })}
        </div>
        <nav aria-label="Page navigation example">
          <ul class="pagination">
           
            <li class="page-item">
              <a class="page-link">1</a>
            </li>
            <li class="page-item">
              <a class="page-link">2</a>
            </li>
            {ListExam.length > 5 ? (
              <li class="page-item">
                <a class="page-link">3</a>
              </li>
            ) : (
              " "
            )}
           
          </ul>
        </nav>
      </div>
    </>
  );
}
