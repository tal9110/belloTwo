import React, { useContext } from "react";
import { TransactionConext } from "../context/TransactionContext";
import {
  Stack,
  Title,
  createStyles,
  Text,
  Group,
  rem,
  Paper,
} from "@mantine/core";
import { GrTransaction } from "react-icons/gr";

const useStyles = createStyles((theme) => ({
  root: {
    padding: `calc(${theme.spacing.xl} * 1.5)`,
  },

  value: {
    fontSize: rem(24),
    fontWeight: 700,
    lineHeight: 1,
  },

  diff: {
    lineHeight: 1,
    display: "flex",
    alignItems: "center",
  },

  icon: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[3]
        : theme.colors.gray[4],
  },

  title: {
    fontWeight: 700,
    textTransform: "uppercase",
  },
}));
const TransactionCard = ({ addressTo, addressFrom, timestamp, amount }) => {
  const classes = useStyles();

  return (
    <Paper withBorder p="md" radius="md" key="title">
      <Group position="apart">
        <Text size="xs" color="dimmed" className={classes.title}>
          {timestamp}
        </Text>
        <GrTransaction />
      </Group>
      <Text color={"teal"} fz="sm" fw={500} className={classes.diff}>
        <span>+{amount} ETH</span>
      </Text>
      <Group align="flex-end" spacing="xs" mt={25}>
        <Text className={classes.value}>
          To: {addressTo.slice(0, 3)}...{addressTo.slice(-4)}
        </Text>
      </Group>

      <Text fz="xs" c="dimmed" mt={7}>
        From: {addressFrom.slice(0, 3)}...{addressFrom.slice(-4)}
      </Text>
    </Paper>
  );
};

export default function Transactions() {
  const { currentAccount, transactions } = useContext(TransactionConext);
  //   console.log(transactions);
  return (
    <div>
      <Stack mt={20} align="center">
        <Title mb={20} order={4}>
          Transaction History
        </Title>
        {transactions.map((transaction, i) => {
          return <TransactionCard {...transaction} key={i} />;
        })}
      </Stack>
    </div>
  );
}
