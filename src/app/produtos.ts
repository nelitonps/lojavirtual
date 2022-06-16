export interface IProduto{
    id: number;
    descricao: string;
    preco: number;
    descricaoPreco: string;
    quantidadeEstoque: number;
    imagem: string;
}

export interface IProdutoCarrinho extends IProduto{
    quantidade: number;
}

export const produtos: IProduto[] = [
{ id: 1, descricao: "Mouse gamer", preco: 230.00, descricaoPreco: "À vista via PIX", imagem: "./assets/mouse.jpg", quantidadeEstoque: 15 },
{ id: 2, descricao: "Monitor de bancada", preco: 1548.00, descricaoPreco: "À vista via PIX", imagem: "./assets/monitor.jpg", quantidadeEstoque: 18 },
{ id: 3, descricao: "Teclado de bancada", preco: 49.50, descricaoPreco: "À vista via PIX", imagem: "./assets/teclado.jpg", quantidadeEstoque: 7 },
{ id: 4, descricao: "Fone para jogos", preco: 32.00, descricaoPreco: "À vista via PIX", imagem: "./assets/fonejogos.jpg", quantidadeEstoque: 11 },
{ id: 5, descricao: "Fone de ouvido", preco: 18.65, descricaoPreco: "À vista via PIX", imagem: "./assets/foneouvido.jpg", quantidadeEstoque: 15 },
{ id: 6, descricao: "Fone de ouvido fio", preco: 87.90, descricaoPreco: "À vista via PIX", imagem: "./assets/foneouvidofio.jpg", quantidadeEstoque: 10 },
{ id: 7, descricao: "HD 1TB Armazenamento", preco: 234.00, descricaoPreco: "À vista via PIX", imagem: "./assets/hd1tb.jpg", quantidadeEstoque: 9 },
{ id: 8, descricao: "Placa de video gamer", preco: 1180.00, descricaoPreco: "À vista via PIX", imagem: "./assets/placavideo.jpg", quantidadeEstoque: 10 },
{ id: 9, descricao: "Processador Ryzen", preco: 2500.00, descricaoPreco: "À vista via PIX", imagem: "./assets/processadorrz.jpg", quantidadeEstoque: 10 },
{ id: 10, descricao: "Notebook para trabalho", preco: 2786.00, descricaoPreco: "À vista via PIX", imagem: "./assets/notebooktb.jpg", quantidadeEstoque: 15 },
{ id: 11, descricao: "Notebook para jogos", preco: 5327.00, descricaoPreco: "À vista via PIX", imagem: "./assets/notebookjogos.jpg", quantidadeEstoque: 12 },
{ id: 12, descricao: "Mouse para descktop", preco: 28.00, descricaoPreco: "À vista via PIX", imagem: "./assets/mousedesk.jpg", quantidadeEstoque: 11 },
{ id: 13, descricao: "Mouse moderno", preco: 110.00, descricaoPreco: "À vista via PIX", imagem: "./assets/mousemd.jpg", quantidadeEstoque: 16 },
{ id: 14, descricao: "Pendrive 16GB", preco: 45.00, descricaoPreco: "À vista via PIX", imagem: "./assets/pendrive16gb.jpg", quantidadeEstoque: 27 },
{ id: 15, descricao: "HD SSD 240GB", preco: 297.00, descricaoPreco: "À vista via PIX", imagem: "./assets/hdssd.jpg", quantidadeEstoque: 19 },
{ id: 16, descricao: "Monitor Gamer Acer", preco: 3998.00, descricaoPreco: "À vista via PIX", imagem: "./assets/monitor2.jpg", quantidadeEstoque: 21 },
]