create database loja_carro;
use loja_carro;
create table carros (
id int auto_increment primary key,
titulo varchar(100),
preco decimal(9, 2),
descricao text,
marca varchar(50),
modelo varchar(50),
kilometragem int,
data_compra date,
cambio varchar(20)
);

insert into carros (titulo, preco, descricao, marca, modelo, kilometragem, data_compra, cambio) values
('vendo gol', 12000.00,
'carro em bom estado de consevação',
'volkwagen', 'gol', 250000, 2013-12-12,
'Manual');

insert into carros (titulo, preco, descricao, marca, modelo, kilometragem, data_compra, cambio) values
('vendo celta', 18000.00,
'carro em bom estado de consevação',
'chevrolet', 'celta', 250000, 2017-08-09,
'Manual');

select *from carros;


