import React from "react";
import { Text, Stack } from "@mantine/core";
import CollectionCard from "./CollectionCard";

export default function CollectionDisplay() {
  return (
    <>
      <div
        style={{
          height: "345px",
          background:
            "linear-gradient(to bottom, rgba(170, 39, 91, 0) 50%, #EDEDED 50%)",
        }}
      >
        <Stack>
          <Text
            ml={50}
            color="white"
            style={{ fontSize: "30px", fontWeight: 400 }}
          >
            Your searches
          </Text>
          <CollectionCard
            image={"/bayc4.png"}
            avatar={"/bayc3.png"}
            name="Bored Ape Yacht Club"
            job={"5,806 owners"}
          />
        </Stack>
      </div>
      <div
        style={{
          height: "450px",
          backgroundColor: "#EDEDED",
        }}
      >
        <Stack pt={25} spacing={"xl"}>
          <Text
            ml={50}
            color="black"
            style={{ fontSize: "30px", fontWeight: 400 }}
          >
            Trending collections
          </Text>
          <div
            style={{
              display: "flex",
              overflowX: "auto",
              width: "100%",
              maxWidth: "100vw",
            }}
          >
            <div style={{ width: "25%" }}>
              <CollectionCard
                image={"/bayc4.png"}
                avatar={"/bayc3.png"}
                name="Bored Ape Yacht Club"
                job={"5,806 owners"}
              />
            </div>
            <div style={{ width: "25%" }}>
              <CollectionCard
                image={"/bayc4.png"}
                avatar={"/bayc3.png"}
                name="Bored Ape Yacht Club"
                job={"5,806 owners"}
              />
            </div>{" "}
            <div style={{ width: "25%" }}>
              <CollectionCard
                image={"/bayc4.png"}
                avatar={"/bayc3.png"}
                name="Bored Ape Yacht Club"
                job={"5,806 owners"}
              />
            </div>{" "}
            <div style={{ width: "25%" }}>
              <CollectionCard
                image={"/bayc4.png"}
                avatar={"/bayc3.png"}
                name="Bored Ape Yacht Club"
                job={"5,806 owners"}
              />
            </div>{" "}
            <div style={{ width: "25%" }}>
              <CollectionCard
                image={"/bayc4.png"}
                avatar={"/bayc3.png"}
                name="Bored Ape Yacht Club"
                job={"5,806 owners"}
              />
            </div>{" "}
            <div style={{ width: "25%" }}>
              <CollectionCard
                image={"/bayc4.png"}
                avatar={"/bayc3.png"}
                name="Bored Ape Yacht Club"
                job={"5,806 owners"}
              />
            </div>{" "}
            <div style={{ width: "25%" }}>
              <CollectionCard
                image={"/bayc4.png"}
                avatar={"/bayc3.png"}
                name="Bored Ape Yacht Club"
                job={"5,806 owners"}
              />
            </div>{" "}
            <div style={{ width: "25%" }}>
              <CollectionCard
                image={"/bayc4.png"}
                avatar={"/bayc3.png"}
                name="Bored Ape Yacht Club"
                job={"5,806 owners"}
              />
            </div>
          </div>
        </Stack>
      </div>
    </>
  );
}
