import Dashboard from "./Dashboard/Dashboard";
import { isMobile } from "react-device-detect";
import { Text, Image, Stack } from "@mantine/core";

function App() {
  return (
    <>
      {isMobile ? (
        <div
          style={{
            backgroundColor: "#AA275B",
            width: "100vw",
            height: "100vh",
          }}
        >
          <Stack align="center" justify="center" style={{ height: "100vh" }}>
            <Image src="/mainLogo.svg" alt="logo" width={200} />
            <Text style={{ fontWeight: 800 }} color="white">
              Please visit on Desktop
            </Text>
          </Stack>
        </div>
      ) : (
        <Dashboard />
      )}
    </>
  );
}

export default App;
