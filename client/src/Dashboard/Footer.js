import { Image, Group, UnstyledButton, Text, Tooltip } from "@mantine/core";
import React from "react";
import { RxTwitterLogo } from "react-icons/rx";
import { RiInstagramLine } from "react-icons/ri";
import { RiDiscordLine } from "react-icons/ri";
import { RiTelegramLine } from "react-icons/ri";
import { useWindowScroll } from "@mantine/hooks";

export default function Footer() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <div
      style={{
        position: "relative",
        // display: "flex",
        // justifyContent: "flex-end",
        backgroundColor: "rgb(171, 39, 91)",
        paddingBottom: "15px",
        padding: "1rem",
      }}
    >
      <Group position="apart">
        <Image ml={30} width={250} src={"/mainLogo.svg"} />
        <Group>
          <UnstyledButton onClick={() => scrollTo({ y: 0 })}>
            <Text size={20} color="white">
              Home
            </Text>
          </UnstyledButton>
          <UnstyledButton
            onClick={() =>
              window.open(
                "https://mirror.xyz/0x3F40b243df2d1757566c34572777e23E6b0f2D80",
                "_blank"
              )
            }
          >
            <Text size={20} color="white">
              Blog
            </Text>
          </UnstyledButton>{" "}
          <UnstyledButton>
            <Tooltip label="Hire Tal">
              <Text size={20} color="white">
                Hiring
              </Text>
            </Tooltip>
          </UnstyledButton>
        </Group>
        <Group mr={30}>
          <UnstyledButton>
            <RxTwitterLogo size={25} color="white" />
          </UnstyledButton>
          <UnstyledButton>
            <RiInstagramLine size={25} color="white" />
          </UnstyledButton>
          <UnstyledButton>
            <RiDiscordLine size={25} color="white" />
          </UnstyledButton>
          <UnstyledButton>
            <RiTelegramLine size={25} color="white" />
          </UnstyledButton>
        </Group>
      </Group>
    </div>
  );
}
