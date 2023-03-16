import React, { useState } from "react";
import {
  Image,
  Text,
  Center,
  Stack,
  Group,
  UnstyledButton,
  Button,
  Modal,
  TextInput,
  Popover,
} from "@mantine/core";
import { RxMagnifyingGlass } from "react-icons/rx";
import CollectionDisplay from "./CollectionDisplay";
import Footer from "./Footer";
import { TransactionConext } from "../context/TransactionContext";
import { useContext } from "react";
import { FaEthereum } from "react-icons/fa";
import { useDisclosure } from "@mantine/hooks";
import Transactions from "./Transactions";
import "./styles.css";
import R3f from "./R3f";

export default function Dashboard() {
  const {
    connectWallet,
    currentAccount,
    formData,
    handleChange,
    sendTransaction,
    isLoading,
  } = useContext(TransactionConext);
  const [opened, { open, close }] = useDisclosure(false);
  const [transactionComplete, setTransactionComplete] = useState(false);

  const handleOpen = () => {
    if (!currentAccount) {
      connectWallet();
    } else {
      open();
    }
  };

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;
    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) {
      alert("Please fill in all fields to send a transaction.");
      return;
    }
    sendTransaction().then(() => {
      setTransactionComplete(true);
    });
  };

  const handleClose = () => {
    close();
    setTransactionComplete(false);
  };
  const [spin, setSpin] = useState(0);

  return (
    <>
      <R3f spin={spin} />

      <Modal centered opened={opened} onClose={handleClose} title="Send Money">
        <Stack>
          {!transactionComplete ? (
            <>
              <TextInput
                placeholder="Address To"
                name="addressTo"
                onChange={(e) => handleChange(e, "addressTo")}
              />
              <TextInput
                placeholder="Amount (ETH)"
                name="amount"
                onChange={(e) => handleChange(e, "amount")}
              />
              <TextInput
                placeholder="From (name)"
                name="keyword"
                onChange={(e) => handleChange(e, "keyword")}
              />
              <TextInput
                placeholder="Enter Message"
                name="message"
                onChange={(e) => handleChange(e, "message")}
              />
              <Button
                variant="light"
                color="pink.9"
                onClick={(e) => handleSubmit(e)}
                loading={isLoading}
              >
                Send
              </Button>
            </>
          ) : (
            <>
              <Center>
                <Button onClick={handleClose} variant="light" color="pink.9">
                  Success! Click to close
                </Button>
              </Center>
            </>
          )}
        </Stack>
      </Modal>
      {/* <div style={{ position: "absolute", zIndex: 2 }}> */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          backgroundColor: "rgb(171, 39, 91)",
          paddingBottom: "5px",
          padding: "1rem",
        }}
      >
        {currentAccount ? (
          <Stack mr={20}>
            <Group spacing={"sm"}>
              <Popover width={300} position="bottom" withArrow shadow="md">
                <Popover.Target>
                  <UnstyledButton>
                    <Image width={18} src={"/searches.svg"} />
                  </UnstyledButton>
                </Popover.Target>
                <Popover.Dropdown>
                  <Transactions />
                </Popover.Dropdown>
              </Popover>

              <Button color="dark" variant="subtle">
                <Group>
                  <Image width={22} src={"/circle.png"} />
                  <Text
                    color="white"
                    style={{ fontSize: "18px", fontWeight: 700 }}
                  >
                    {currentAccount.slice(0, 6)}...{currentAccount.slice(-4)}
                  </Text>
                </Group>
              </Button>
            </Group>
            <Button
              variant="white"
              color="pink.9"
              rightIcon={<FaEthereum size={18} />}
              onClick={() => handleOpen()}
              size="sm"
            >
              Send ETH
            </Button>
          </Stack>
        ) : (
          <Button variant="white" color="pink.9" onClick={connectWallet}>
            Connect wallet
          </Button>
        )}
      </div>
      <div
        style={{
          position: "relative",
          backgroundColor: "rgba(171, 39, 91, 0)",
          minHeight: "480px",
          paddingBottom: "5px",
        }}
      >
        <Stack align="center" spacing={"xl"}>
          <Image width={350} src={"mainLogo.svg"} mb={15} mt={90} />
          <Text color="white" sx={{ fontSize: 50 }}>
            Discover More About Your Collectors
          </Text>

          <input
            type="text"
            placeholder="Search a contract or collection"
            style={{
              width: "660px",
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              height: "60px",
              fontSize: "20px",
              color: "white",
              fontWeight: 500,
              border: "none",
              borderRadius: "5px",
              paddingLeft: "25px",
              paddingRight: "16px",
              outline: "none",
            }}
          />
          <Button
            mt={10}
            variant="white"
            color="pink.9"
            leftIcon={<RxMagnifyingGlass size={18} />}
            onClick={() => setSpin(spin + 1)}
          >
            Build custom search
          </Button>
        </Stack>
      </div>
      <div style={{ position: "absolute", zIndex: "1" }}>
        <CollectionDisplay />
        <Footer />
      </div>
    </>
  );
}
