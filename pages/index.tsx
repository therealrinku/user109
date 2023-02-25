import { Avatar, Table, Tabs } from "antd";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { Fragment } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const ReactApexChart = dynamic(() => import("react-apexcharts"),{ssr:false});

const Home: NextPage = () => {
  const series = [
    {
      name: "Desktops",
      data: [10,20,30,40],
    },
  ];
  const options: any = {
    chart: {
      type: "area",
      zoom: {
        enabled: false,
      },
      toolbar: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    title: {
      text: "Weekly Asset Growth Chart",
      align: "left",
    },
    xaxis: {
      categories: ["Feb 20","Feb 19","Feb 18","Feb 17"],
    },
  };

  const dataSource = [
    {
      key: "1",
      name: "Coinbase IPO",
      age: '$20',
      count:200,
      address: "$4000",
    },
    {
      key: "1",
      name: "Apex Stock LLC",
      age: '$23',
      count:200,
      address: "$4600",
    },
  ];

  const columns = [
    {
      title: "Asset Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "PPT",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Count",
      dataIndex: "count",
      key: "count",
    },
    {
      title: "Total Value",
      dataIndex: "address",
      key: "address",
    },
  ];

  return (
    <Fragment>
      <div className="mx-auto max-w-3xl">
        <section className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg p-5 mb-5 shadow">
          <p className="text-lg font-bold mb-3">$50,050</p>
          <p className="flex items-center text-red-100"><IoMdArrowDropdown size={17}/> 10 % down this week </p>
        </section>

        <ReactApexChart options={options} series={series} height="300" width="100%" />

        <Table bordered dataSource={dataSource} columns={columns} pagination={false} />
      </div>

    </Fragment>
  );
};

export default Home;
