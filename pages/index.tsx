import { Avatar, Table, Tabs } from "antd";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { Fragment } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const Home: NextPage = () => {
  const series = [
    {
      name: "Desktops",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
    },
  ];

  const options: any = {
    chart: {
      toolbar: false,
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    title: {
      text: "Product Trends by Month",
      align: "left",
      foreColor:"black"
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
    },
  };

  return (
    <Fragment>
      <div className="mx-auto max-w-3xl px-3">
        <section className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg p-5 mb-5 shadow">
          <p className="text-lg font-bold mb-3">$50,050</p>
          <p className="flex items-center text-red-100">
            <IoMdArrowDropdown size={17} /> 10 % down this week{" "}
          </p>
        </section>

        <ReactApexChart options={options} series={series} height="300" width="100%" />

        <table className="shadow-none border-2 border-red-500">
          <thead>
            <tr>
              <th>Asset Name</th>
              <th>PPT</th>
              <th>Quantity</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>TLDR IPO</td>
              <td>$340</td>
              <td>430.409</td>
              <td>$24,509</td>
            </tr>
            <tr>
              <td>TLDR IPO</td>
              <td>$340</td>
              <td>430.409</td>
              <td>$24,509</td>
            </tr>
            <tr>
              <td>TLDR IPO</td>
              <td>$340</td>
              <td>430.409</td>
              <td>$24,509</td>
            </tr>
            <tr>
              <td>TLDR IPO</td>
              <td>$340</td>
              <td>430.409</td>
              <td>$24,509</td>
            </tr>
            <tr>
              <td>TLDR IPO</td>
              <td>$340</td>
              <td>430.409</td>
              <td>$24,509</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default Home;
