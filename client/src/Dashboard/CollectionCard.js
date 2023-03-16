import {
  createStyles,
  Card,
  Avatar,
  Text,
  Group,
  Button,
  rem,
  UnstyledButton,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    height: "275px",
    width: "275px",
  },

  avatar: {
    border: `${rem(2)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white
    }`,
  },
}));

export default function CollectionCard({ image, avatar, name, job, stats }) {
  const { classes, theme } = useStyles();

  //   const items = stats.map((stat) => (
  //     <div key={stat.label}>
  //       <Text ta="center" fz="lg" fw={500}>
  //         {stat.value}
  //       </Text>
  //       <Text ta="center" fz="sm" c="dimmed">
  //         {stat.label}
  //       </Text>
  //     </div>
  //   ));

  return (
    <Card
      sx={{ cursor: "pointer" }}
      padding="xl"
      radius="md"
      className={classes.card}
      ml={50}
    >
      <Card.Section
        sx={{
          backgroundImage: `url(${image})`,
          height: 110,
          backgroundSize: "cover",
          filter: "brightness(70%) blur(1px)",
        }}
      />
      <Avatar
        src={avatar}
        size={100}
        radius={80}
        mx="auto"
        mt={-30}
        className={classes.avatar}
      />
      <Text ta="center" fz="lg" fw={500} mt="sm">
        {name}
      </Text>
      <Text ta="center" fz="sm" c="dimmed">
        {job}
      </Text>
    </Card>
  );
}
