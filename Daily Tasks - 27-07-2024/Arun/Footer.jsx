import React from "react";

export default function Footer() {
  return (
    <div bgColor="light" className="text-center text-lg-left">
      <div
        className="text-center p-3 bg-light"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <a className="text-dark" href="https://fetch.com/">
          Fetch.com
        </a>
      </div>
    </div>
  );
}
