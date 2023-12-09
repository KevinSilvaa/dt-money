// Strategic Imports
import { Routes, Route } from "react-router-dom";

// Routes Imports
import { Transactions } from "./Pages/Transactions";

export function Router() {

  return (
    <Routes>
      <Route path="/" element={<Transactions />} />
    </Routes>
  );
}
