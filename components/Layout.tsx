import { Avatar, Tabs } from "antd";
import React, { Fragment } from "react";
import { FiCreditCard, FiHome } from "react-icons/fi";

export default function Layout({ children }: { children: React.ReactChild }) {
  return (
    <Fragment>
      <div className="shadow text-white rounded-lg px-2 py-1 text-sm bg-gradient-to-r from-purple-500 to-pink-500 my-10 w-full max-w-3xl mx-auto">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 sticky top-0">
          <section className="m-2 flex items-center gap-2 justify-between">
            <p className="font-bold">User109</p>

            <div className="flex items-center gap-2">
              <Avatar src="https://images.unsplash.com/photo-1669553640769-0e4019b67d46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE1NnxTNE1LTEFzQkI3NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
              <p className="font-bold">Rebecca Taylor</p>
            </div>
          </section>

          <Tabs
            items={[FiHome, FiCreditCard].map((Icon, i) => {
              const id = String(i + 1);
              return {
                label: (
                  <span className="flex items-center gap-2 text-white">
                    <Icon />
                    {i === 0 ? "Dashboard" : "Trade"}
                  </span>
                ),
                key: id,
              };
            })}
            centered
          />
        </div>
        {children}
      </div>
    </Fragment>
  );
}
