// 1. Página Inicial do Dashboard:
//    - Exibir uma tabela de funcionários com colunas para nome, cargo, departamento e ações (editar/excluir).
//    - Incluir um botão para adicionar um novo funcionário.
//    - Implementar funcionalidade de ordenação e busca na lista de funcionários.

import {
  Box,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { headers } from "next/headers";
import { ReactNode } from "react";
import { FaUserEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";

interface DashboardPageProps {
  children: ReactNode;
}

const API_BASE_URL = process.env.API_BASE_URL || "http://localhost:3001";
const API_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjQ4MzA2NjY1NDNjZTY4YmFmNzExNTEiLCJpYXQiOjE3MTYwMDk2NTAsImV4cCI6MTcxNjM2OTY1MH0.JE8VqiMlR3O51YERfQkKmnZHDr0Wr7cnHFjfqYLz9Ew";

export default async function DashboardPage({ children }: DashboardPageProps) {
  const token = headers().get("token") || API_TOKEN;
  const employees = await fetch(`${API_BASE_URL}/employee`, {
    headers: {
      "x-auth-token": token,
    },
  });

  return (
    <Box>
      {JSON.stringify(employees)}
      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Department</Th>
              <Th>Role</Th>
              <Th>Avatar</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td></Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}
