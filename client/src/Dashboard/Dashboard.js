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
  Modal,
  TextInput,
  NumberInput,
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

export default function Dashboard() {
  const {
    connectWallet,
    currentAccount,
    formData,
    setFormData,
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

  return (
    <>
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

              <Text
                mb={5}
                style={{ fontSize: "30px", fontWeight: 100 }}
                color="white"
              >
                |
              </Text>
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
              // mt={10}
              variant="white"
              color="pink.9"
              rightIcon={<FaEthereum size={18} />}
              onClick={() => handleOpen()}
              size="sm"
            >
              Send someone money
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
          backgroundColor: "rgb(171, 39, 91)",
          minHeight: "480px",
          paddingBottom: "5px",
        }}
      >
        <Stack align="center" spacing={"xl"}>
          <Image width={350} src={"mainLogo.svg"} mb={15} mt={90} />
          <Text color="white" sx={{ fontSize: 50 }}>
            Discover More About Your Collectors
          </Text>
          <Input
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.314)",
              borderRadius: "5px",
              color: "white",
              width: "660px",
              padding: "10px",
              margin: "1.5px",
              fontSize: "20px",
            }}
            style={{ color: "white" }}
            // inputStyle={{ color: "white" }}
            variant="unstyled"
            placeholder="Search a contract or collection"
            color="blue"
            radius={"md"}
          />
          <Button
            mt={10}
            variant="white"
            color="pink.9"
            leftIcon={<RxMagnifyingGlass size={18} />}
          >
            Build custom search
          </Button>
        </Stack>
      </div>
      <CollectionDisplay />
      <Footer />
    </>
  );
}
