import React, { useEffect, useState } from "react";
import {
  Image,
  Text,
  Center,
  Stack,
  Input,
  Group,
  ActionIcon,
  UnstyledButton,
  Button,
  Card,
  Container,
  Title,
  ScrollArea,
} from "@mantine/core";
import { RxMagnifyingGlass } from "react-icons/rx";
import CollectionCard from "./CollectionCard";

export default function CollectionDisplay() {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    fetch("https://superrare.co/api/v0.1/collections/all")
      .then((response) => response.json())
      .then((data) => {
        const { collections } = data;
        setCollections(collections);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <div
        style={{
          height: "345px",
          background: "linear-gradient(to bottom, #AA275B 50%, #EDEDED 50%)",
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
              maxWidth: "100vw", // Ensures the container doesn't overflow the viewport width
            }}
          >
            {collections?.map((collection) => (
              <div key={collection.id} style={{ width: "25%" }}>
                <CollectionCard
                  image={collection.image_url}
                  avatar={collection.owner_profile_img}
                  name={collection.name}
                  // job={`${listing.current_price} ${listing.payment_token.symbol} - ${listing.remaining_quantity} left`}
                />
              </div>
            ))}
          </div>
        </Stack>
      </div>
    </>
  );
}
