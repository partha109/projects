DROP DATABASE IF EXISTS invoice_manager;
CREATE DATABASE invoice_manager;

USE invoice_manager;

DROP TABLE IF EXISTS statuses;
CREATE TABLE statuses (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  status VARCHAR(25) NOT NULL
);

INSERT INTO statuses (id, status) VALUES
(1, 'draft'),
(2, 'pending'),
(3, 'paid');

DROP TABLE IF EXISTS invoices;
CREATE TABLE invoices (
  id BIGINT PRIMARY KEY AUTO_INCREMENT, 
  number VARCHAR(5) NOT NULL, 
  client VARCHAR(150) NOT NULL, 
  email VARCHAR(255) NOT NULL, 
  amount MEDIUMINT NOT NULL, 
  status_id BIGINT UNSIGNED NOT NULL
);

INSERT INTO invoices (id, number, client, email, amount, status_id) VALUES
(1, 'BIRHN', 'Lilia Harding', 'liliaharding@enormo.com', 4000, 2),
(2, 'RNJQH', 'Estelle Velez', 'estellevelez@enormo.com', 2928, 3),
(3, 'MLEDE', 'Beatriz Banks', 'beatrizbanks@enormo.com', 6751, 2),
(4, 'LAJCG', 'Rios Cunningham', 'rioscunningham@enormo.com', 3629, 1),
(5, 'ZZNYO', 'Drake Boyer', 'drakeboyer@enormo.com', 1208, 2),
(6, 'CLGOW', 'Stella Atkins', 'stellaatkins@enormo.com', 8631, 1),
(7, 'QVEXN', 'Holder Powell', 'holderpowell@enormo.com', 4552, 2),
(8, 'AQJWU', 'Aline Allen', 'alineallen@enormo.com', 8628, 2),
(9, 'RSKSN', 'Carroll Byrd', 'carrollbyrd@enormo.com', 3551, 2),
(10, 'SITJT', 'Banks Alston', 'banksalston@enormo.com', 9141, 1),
(11, 'ZKGRP', 'Mayer Battle', 'mayerbattle@enormo.com', 5511, 1),
(12, 'GGMLQ', 'Rowland Ray', 'rowlandray@enormo.com', 7977, 3),
(13, 'LJULN', 'Lindsey Rodriguez', 'lindseyrodriguez@enormo.com', 3943, 3),
(14, 'OLOIL', 'Meyers Payne', 'meyerspayne@enormo.com', 8757, 2),
(15, 'YNTIP', 'Rosalie Hunt', 'rosaliehunt@enormo.com', 8261, 3),
(16, 'ZYNOC', 'Foreman Holcomb', 'foremanholcomb@enormo.com', 1959, 1),
(17, 'HVMRO', 'Tyson Roth', 'tysonroth@enormo.com', 4208, 1),
(18, 'VCTQD', 'Maryann Case', 'maryanncase@enormo.com', 7171, 1),
(19, 'FDGPI', 'Vargas Lawson', 'vargaslawson@enormo.com', 8595, 2),
(20, 'OREYP', 'Pamela Figueroa', 'pamelafigueroa@enormo.com', 2264, 2),
(21, 'EILWH', 'Todd Bishop', 'toddbishop@enormo.com', 1866, 2),
(22, 'RVDFY', 'Craig Compton', 'craigcompton@enormo.com', 2283, 2),
(23, 'FFUWM', 'Margery Barry', 'margerybarry@enormo.com', 2577, 1),
(24, 'SQRVR', 'Candace Ramos', 'candaceramos@enormo.com', 5356, 1),
(25, 'SJLET', 'Darcy Thompson', 'darcythompson@enormo.com', 5045, 2);

ALTER TABLE invoices
  ADD KEY invoices_status_fk (status_id);