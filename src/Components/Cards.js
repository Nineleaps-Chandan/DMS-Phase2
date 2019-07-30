import React, { Component } from "react";
import "./Cards.css";
import LabelBottomNavigation from "./BottomNavigation";
import PrimarySearchAppBar from "./HRnavbar";

export default function Cards() {
  return (
    <div classname="CardsHover">
      <div>
        <PrimarySearchAppBar />
      </div>

      <html lang="en">
        <head>

          <link
            href="https://fonts.googleapis.com/css?family=Poppins"
            rel="stylesheet"
          />
        </head>
        <body>
          <div class="container">
            <div class="card">
              <div class="face face1">
                <div class="content">
                  <h2>Marksheet</h2>
                  <p>
                    <button>Choose File</button>
                  </p>
                </div>
              </div>

              <div class="face face2">
                <h2>01</h2>
              </div>
            </div>

            {/* <div class="card">
              <div class="face face1">
                <div class="content">
                  <h2>Aadhar</h2>
                  <p>
                    consectetur, adipisicing elit. Itaque ut soluta possimus
                    officia
                  </p>
                </div>
              </div>

              <div class="face face2">
                <h2>02</h2>
              </div>
            </div>

            <div class="card">
              <div class="face face1">
                <div class="content">
                  <h2>Pan-Card</h2>
                  <p>
                    consectetur, adipisicing elit. Itaque ut soluta possimus
                    officia
                  </p>
                </div>
              </div>

              <div class="face face2">
                <h2>03</h2>
              </div>
            </div>

            <div class="card">
              <div class="face face1">
                <div class="content">
                  <h2>Marksheet</h2>
                  <p>
                    consectetur, adipisicing elit. Itaque ut soluta possimus
                    officia
                  </p>
                </div>
              </div>

              <div class="face face2">
                <h2>04</h2>
              </div>
            </div>

            <div class="card">
              <div class="face face1">
                <div class="content">
                  <h2>Pan Card</h2>
                  <p>
                    consectetur, adipisicing elit. Itaque ut soluta possimus
                    officia
                  </p>
                </div>
              </div>

              <div class="face face2">
                <h2>05</h2>
              </div>
            </div>

            <div class="card">
              <div class="face face1">
                <div class="content">
                  <h2>Marksheet</h2>
                  <p>
                    consectetur, adipisicing elit. Itaque ut soluta possimus
                    officia
                  </p>
                </div>
              </div>

              <div class="face face2">
                <h2>06</h2>
              </div>
            </div> */}
            {/* <div id="bottom_link">
                            <LabelBottomNavigation />
                        </div> */}
          </div>
        </body>
      </html>
    </div>
  );
}
