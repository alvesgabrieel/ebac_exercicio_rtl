import { render, screen } from "@testing-library/react";

import Post from ".";

describe("Deve renderizar o componente Post", () => {
  test("Deve renderizar", () => {
    render(
      <Post
        imageUrl="https://www.orangeboxminiaturas.com.br/img/products/batmovel-1989-figura-batman-em-metal-jada-toys-1-24-jad-98260_1_1000.jpg"
        children={"Teste: Olha só que legal minha miniatura do Batmóvel."}
      />
    );
    expect(screen.getByTestId("post-container")).toBeInTheDocument();
  });
});
