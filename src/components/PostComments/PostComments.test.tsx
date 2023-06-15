import { fireEvent, render, screen } from "@testing-library/react";
import PostComment from ".";

describe("Teste para o componente PostComment", () => {
  test("Deve renderizar o componente corretamente", () => {
    render(<PostComment />);
    expect(screen.getByText("Comentar")).toBeInTheDocument();
  });

  test("Deve renderizar os comentarios corretamente", () => {
    render(<PostComment />);
    fireEvent.change(screen.getByTestId("campo-comentario"), {
      target: {
        value: "gostei do carro",
      },
    });
    fireEvent.click(screen.getByTestId("btn-comentario"));
    fireEvent.change(screen.getByTestId("campo-comentario"), {
      target: {
        value: "like",
      },
    });
    fireEvent.click(screen.getByTestId("btn-comentario"));
    expect(screen.getByText("like")).toBeInTheDocument();
  });
});
