export class Card {
  person: String;
  object: String;
  action: String;
  hard: String;
  everyone: String;
  constructor(
    person: String,
    object: String,
    action: String,
    hard: String,
    everyone: String
  ) {
    this.person = person;
    this.object = object;
    this.action = action;
    this.hard = hard;
    this.everyone = everyone;
  }
}

export interface DiceFace {
  name: String;
  color: String;
  icon: any;
}

export class Player {
  name: String;
  icon: String;
  constructor(name: String, icon: String) {
    this.name = name;
    this.icon = icon;
  }
}
export class Team {
  id: number;
  name: String;
  members: Player[];
  score: number;
  color: String;
  constructor(id: number, name: String, members: Player[]) {
    this.id = id;
    this.name = name;
    this.members = members;
    this.score = 0;
    this.color = '#4C6663';
  }
}

export const data: Card[] = [
  new Card('Venado', 'Cinta Metrica', 'Abollar', 'Muchacho', 'Estampilla'),
  new Card(
    'Montevideo',
    'Juego de damas',
    'Transportar',
    'Tormenta',
    'Registrar'
  ),
  new Card('Almacén', 'Curita', 'Avergonzar', 'Y.P.F', 'Espacio'),
  new Card('Pescado', 'Saquito de Té', 'Apuñalar', 'Lotería', 'Derecha'),
  new Card('Velodromo', 'Cucharón', 'Tallar', 'Vacío', 'Salto'),
  new Card('Océano', 'Cable Carril', 'Crecer', 'Funicular', 'Oso de Peluche'),
  new Card('Playa', 'Linterna', 'Estornudar', 'Mediano', 'Calefacción'),
  new Card('Ciudad', 'Imán', 'Separar', 'Lejos', 'Patente'),
  new Card(
    'Bíceps',
    'Hilo dental',
    'Adoptar',
    'Fumar Continuamente',
    'Papila Gustativa'
  ),
  new Card('Rusia', 'Cortina', 'Tartamudear', 'Adolescente', 'As'),
  new Card('Jardín', 'Botella', 'Vibrar', 'Patrullero', 'Poco profundo'),
  new Card(
    'Niño',
    'Día del niño',
    'Diferenciar',
    'Regla de medir',
    'Patito de goma'
  ),
  new Card('Pinguino', 'Lechuga', 'Flojear', 'Juez', 'Trasero'),
  new Card('Gaucho', 'Batuta', 'Fracasar', 'Cafeína', 'Largo'),
  new Card('Araña', 'Viñedo', 'Alarmar', 'Gordinflón', 'Plaza'),
  new Card(
    'Banco Central',
    'Perfume',
    'Incendiar',
    'Grieta',
    'Bote Salvavidas'
  ),
  new Card('Pollo', 'Dinamita', 'Afirmar', 'Lupa', 'Terreno'),
  new Card('Islas Malvinas', 'Chicle', 'Hechizar', 'Volumen', 'Pantalones'),
  new Card('Muñeca', 'Monedero', 'Remolcar', 'Civil', 'Pulmón'),
  new Card('Huerto', 'Sello de goma', 'Taladrar', 'Duro', 'Moneda'),
  new Card('Rata', 'Llavero', 'Buscar', 'Cheque en blanco', 'Sol'),
  new Card(
    'Viuda negra',
    'Radiador',
    'Marcar ganado',
    ' Intendente',
    'Baño de espuma'
  ),
  new Card('Madre', 'Funda de almohada', 'Zambullir', 'No', 'Gordo'),
  new Card('Palacio', 'Guitarra', 'Aplaudir', 'Gimnasia', 'Inundación'),
  new Card('Río Nilo', 'Compás', 'Enlazar', 'Bruja', 'Base de lanzamiento'),
  new Card('Mendoza', 'Portafolios', 'Cronometrar', 'Cita', 'Dureza'),
  new Card('Pestañas', 'Avión', 'Empalmar', 'Hombreras', 'Deshidratado'),
  new Card('Señor', 'Voto', 'Arrugarse', 'Maduro', 'Rampa de salida'),
  new Card('El Papa', 'Mástil', 'Adelgazar', 'Brillante', 'Aerosillas'),
  new Card('Toro', 'Papel picado', 'Graduar', 'Meñique', 'Extinto'),
  new Card('Japón', 'Coco', 'Contemplar', 'Contento', 'Maza'),
  new Card('Lima', 'Collar', 'Quemar', 'Tijera para uñas', 'Combustible'),
  new Card('Calle', 'Cucurucho', 'Soplar', 'Formal', 'Grabado'),
  new Card(
    'Vestíbulo',
    'Calentador',
    'Colgar',
    'Burbujas',
    'Dedo gordo del pie'
  ),
  new Card(
    'Desierto',
    'Escritorio',
    'Enterrar',
    'Espejo retrovisor',
    'Mal aliento'
  ),
  new Card(
    'Sala de reuniones',
    'Porción',
    'Vender',
    'Media vuelta',
    ' Estrella'
  ),
  new Card('España', 'Algarrobo', 'Empatar', 'Cóncavo', 'Escala'),
  new Card('Club', 'Trapo', 'Cavar', 'Orejas de conejo', 'Sendero'),
  new Card('Hércules', 'Cuchillo', 'Parpadear', 'Alambrado', ' Chancho'),
  new Card('Cucaracha', 'Portón', 'Tropezar', 'Cuarto oscuro', 'Huracán'),
  new Card(
    'Banco',
    'Aro de básquet',
    'Telefonear',
    'Cabina',
    'Cuatro en punto'
  ),
  new Card('Yo', 'Yunque', 'Saludar', 'Linyera', 'Dolor de espalda'),
  new Card('Pescador', 'Rango', 'Desperdiciar', 'Desván', 'Veleta'),
  new Card('Bariloche', 'Balero', 'Agarrar', 'Matinée', 'Cablevisión'),
  new Card('Oveja', 'Pantuflas', 'Palpar de armas', 'Pesado', 'Terreno baldío'),
  new Card('Bebé', 'Medias de nylon', 'Montar', 'Dulce', 'Feo'),
  new Card('Pájaro', 'Etiqueta', 'Imitar', 'Matemáticas', 'Cielo raso'),
  new Card(
    'Carlos Gardel',
    'Placa de perro',
    'Domesticar',
    'Resumen',
    'Plato volador'
  ),
  new Card('Estómago', 'Leña', 'Acariciar', 'Traductor', 'Alambre de púas'),
  new Card('Córdoba', 'Tubería', 'Alinear', 'Pecado', 'Pata de palo'),
  new Card('Perro salchicha', 'Telaraña', 'Cornear', 'Detrás', 'Dominó'),
  new Card(
    'Elefante',
    'Chaleco de fuerza',
    'Morir',
    ' Tablero de juego',
    'Vías férreas'
  ),
  new Card('Amígdalas', 'Mochila', 'Partir', 'Departamento', 'Obeso'),
  new Card('Dinosaurio', 'Vincha', 'Apuntar', 'Uniforme', 'Lobotomía'),
  new Card('Nariz', 'Hoz', 'Hilvanar', 'Gobierno', 'Agujero negro'),
  new Card('Portero', 'Nudo', 'Especular', 'Torta de chocolate', 'Mitad'),
  new Card('Monja', 'Alambre', 'Descongelar', ' Firma', 'Pegatina'),
  new Card('Esposo', 'Cascabel', 'Sumar', 'Goma', 'Estalactita de hielo'),
  new Card(
    'Hombre',
    'Traje de baño',
    ' Retirar',
    ' Cable telefónico',
    'Señal de alto'
  ),
  new Card('Hipódromo', 'Ensalada', 'Debatir', 'Uso horario', 'Hoyuelo'),
  new Card('Planta alta', 'Estante para libros', 'Dibujar', 'Garabato', 'Beso'),
  new Card('San Luis', 'Escalera', 'Rasgar', ' Polen', 'Pico'),
  new Card(
    'Lazarillo',
    'Felpudo',
    'Ocupar',
    'Tabla de planchar',
    'Cubre tortas'
  ),

  new Card('Policía', 'Bandeja', 'Murmurar', 'Buen viaje', 'Velludo'),
  new Card(
    'Casa quinta',
    'Anillo de diamantes',
    'Lustrar',
    'Pañuelo',
    'Marea baja'
  ),
  new Card('Planeta Tierra', 'Disfraz', 'Beber', 'Centro de mesa', 'Pegamento'),
  new Card('Sala de Recepción', 'Motor', ' Lijar', 'Chiquero', 'Apéndice'),
  new Card('Cubierta', 'Disco', 'Plantar', 'Ananá', ' Ciclón'),
  new Card('Canal de Panamá', 'Equipaje', 'Remar', 'Perejil', 'Punto'),
  new Card(
    'Pista de carreras',
    'Bote de remos',
    'Cantar',
    ' Delta',
    'Enjuague bucal'
  ),
  new Card(
    'Dedo índice',
    'Honda',
    'Latir',
    'Tocadiscos',
    'Platillo de batería'
  ),
  new Card('Punta del Este', ' Chupetín', ' Pensar', 'Cerca', 'Al revés'),
  new Card('Lunar', 'Escopeta', 'Silbar', 'Cúpula', 'Saliva'),
  new Card('Hawai', 'Valla', 'Enmarcar', 'Hamburguesa con queso', 'Maremoto'),
  new Card('Garaje', 'Goma de borrar', 'Empacar', 'Cabaña', 'Teñido'),
  new Card('Pulso', 'Hornalla', 'Construir', 'Vertical', 'Lleno'),
  new Card('Ojo', 'Frambuesa', 'Explotar', 'Maquillaje', 'Tacho de basura'),
  new Card('Ratón', 'Boleto', 'Erupción', 'Primera Guerra Mundial', 'Visera'),
  new Card('Verruga', 'Estéreo', 'Descubrir', 'Escape', 'Código Morse'),
  new Card('Cuarto de baño', 'Cenicero', 'Alterar', 'Tragar', ' Sirena de mar'),
  new Card(
    'Mano derecha',
    'Reloj pulsera',
    'Caer en picada',
    'De pared a pared',
    'Luna de miel'
  ),
  new Card(
    'Pájaro carpintero',
    'Tomacorriente',
    'Desenvolver',
    'Podrido',
    'Cordero'
  ),
  new Card('Motel', 'Títere', 'Empujar', 'Pastelería', 'Espacio exterior'),
  new Card(
    'Machu Picchu',
    'Letrero',
    'Destapar',
    'Señalador de libro',
    'Aljibe'
  ),
  new Card('Tierra del Fuego', 'Muelle', 'Cortar', 'Bosquejo', 'Encuesta'),
  new Card('Conductor', 'Plato', 'Ondular', 'Tenis', 'Barco'),
  new Card('Loro', 'Camiseta', 'Agrupar', 'Cuerdas vocales', 'Concierto'),
  new Card(
    'Progenitor',
    'Azadón',
    'Secuestrar',
    'Línea de partida',
    'Lentejuelas'
  ),
  new Card('Perro', 'Bolsillo', 'Babear', 'Caño de escape', 'Derrumbe'),
  new Card('Autocine', 'Enredadera', 'Roer', 'Cáscara de banana', 'Bombos'),
  new Card('Polo Sur', 'Toilette', 'Comer', 'Gema', 'Seis en punto'),
  new Card('Oeste', 'Gradas', 'Trasplantar', 'Pulgada', 'Funeral'),
  new Card(
    'Océano Pacífico',
    'Máquina de escribir',
    'Nadar',
    'Corderoy',
    'Bocina'
  ),
  new Card(
    'Capital Federal',
    'Rompecabezas',
    'Evaporar',
    'Presión sanguínea',
    'Guerra'
  ),
  new Card(
    'Compañero de cuarto',
    'Encendedor',
    'Surfing',
    'Pronunciar',
    'Tripulación'
  ),
  new Card('Sapo', 'Altavoz', 'Emboscar', 'Pictionary', 'Feria americana'),
  new Card('Tortuga', 'Trineo', 'Entrar', 'Bala de cañón', 'Bidet'),
  new Card('Alemania', 'Tambor', 'Regar', 'Cocinero', 'Oso hormiguero'),
  new Card('España', 'Globo', 'Izar', 'Fiebre amarilla', 'Guión'),
  new Card(
    'Misiones',
    'Cerradura',
    'Emparejar',
    'Bolsa de valores',
    'Organillero'
  ),
  new Card('Establo', 'Neumáticos', 'Sangrar', 'Niñera', 'Insecto'),
  new Card(
    'Penthouse',
    'Sierra eléctrica',
    'Derrotar',
    'Rodilleras',
    'Cabina de teléfono'
  ),
  new Card(
    'Canguro',
    'Lápiz de cejas',
    'Relampaguear',
    'Autopsia',
    'Apretón de manos'
  ),
  new Card('Pintura de guerra', 'Campanario', 'Golf', 'Taxi', 'Dientes'),
  new Card('Nieta', 'Red de seguridad', 'Triturar', 'Jarra', 'Fracaso'),
  new Card('Cejas', 'Sales aromáticas', 'Tostar', 'Miedo', 'Rico'),
  new Card('Torero', 'Álbum', 'Visitar', 'Refugio', 'Diez en punto'),
  new Card(' Pato Donald', 'Píldora', 'Robar', 'Comedia', 'Arte'),
  new Card('Flamenco', 'Puerta', 'Arder', 'Tormenta de arena', 'Yate'),
  new Card('Manicura', 'Cactus', 'Transpirar', 'Pimienta', 'Carpa india'),
  new Card(
    'Zorro',
    'Sacacorchos',
    'Entrevistar',
    'Primera página',
    'Tacos altos'
  ),
  new Card(
    'Oficial',
    'Patín de hielo',
    'Madurar',
    'Carrera de obstáculos',
    'Alcatraz'
  ),
  new Card('Rambo', 'Pantalla', 'Freír', 'Disposición', 'Cruz roja'),
  new Card('Rinoceronte', 'Carpa', 'Estirar', 'Templo', 'Robot'),
  new Card('Piel de animal', 'Balanza', 'Asar', 'Despegar', 'Túnel'),
  new Card('Leopardo', 'Arbustos', 'Oponer', 'Malo', 'Falsificación'),
  new Card('Dentista', 'Alhajas', 'Superar', 'Papelera', 'Tostadora'),
  new Card('Hawai', 'Yunta', 'Ladrar', 'Año', 'Escalones'),
  new Card(
    'Mujer barbuda',
    'Piano',
    'Empaquetar',
    'Infracción',
    'Contaminación'
  ),
  new Card('Langosta', 'Adorno', 'Rotar', 'Geografía', 'Locomotora'),
  new Card('Perro ovejero', 'Biombo', 'Aburrir', 'Geometría', 'Impar'),
  new Card('Panteón', 'Barras paralelas', 'Esculpir', ' Monóculo', 'Llave'),
  new Card('Azafata', 'Almendra', 'Preparar', 'Bolsa de plástico', 'Lazo'),
  new Card(
    'Cancha de fútbol',
    'Secarropas',
    'Resbalar',
    'Minutero',
    ' Estatua de la Libertad'
  ),
  new Card(
    'Menor de edad',
    'Estribo',
    'Presentar',
    'Asiento deportivo',
    'Tempestad'
  ),
  new Card('Mapuche', 'Árbol', 'Encender', 'Pasaporte', 'Litera'),
  new Card('Lagarto', 'Portaligas', 'Pastar', 'Pista de aterrizaje', 'Paz'),
  new Card('Prado', ' Gorra de baño', 'Fumar', 'Sinusitis', 'Matafuegos'),
  new Card('Árbitro', 'Bomba de tiempo', 'Frotar', 'Barrera', 'Perpendicular'),
  new Card('Lagartija', 'Kayak', 'Animar', 'Fonógrafo', 'Topadora'),
  new Card('Mucama', 'Gancho', 'Escuchar', 'Góndola', 'Arco de fútbol'),
  new Card('Convicto', 'Nuez', 'Escalar', 'Pantalla de humo', 'Permanente'),
  new Card('Nuez de Adán', 'Skate', 'Solfear', 'Tetera', 'Retoque'),
  new Card('Lago', 'Escalera de caracol', 'Enjuagar', 'Marfil', 'Smoking'),
  new Card('Guarida', 'Correa', 'Desviar', 'Denso', 'Aguacero'),
  new Card('Dictador', 'Diván', 'Apostar', 'Picante', 'Apagado'),
  new Card('Comisaría', 'Abanico', 'Decorar', 'Sartén', 'Día de campo'),
  new Card('Torpe', 'Compactadora', 'Bordear', 'Barato', 'Garfio'),
  new Card('Pato', 'Pera', 'Afeitar', 'Guerra civil', 'Cerbatana'),
  new Card('Pagoda', 'Alfombra', 'Vendar', 'Diagrama', 'Dos'),
  new Card('Pueblo', 'Lata de aceite', 'Batear', 'Ninguno', 'Amanecer'),
  new Card('Estanciero', 'Martillo', 'Palanquear', 'Mejor', 'Panza'),
  new Card('Lobo', 'Contenedor', 'Picotear', 'Caravana', 'Palanca de cambios'),
  new Card('Úlcera', 'Chinche', 'Espumar', 'Daga', 'Tobillera'),
  new Card('Lombriz', 'Gota', 'Arañar', 'Corriente eléctrica', 'Grande'),
  new Card('Calle Florida', 'Trípode', 'Restar', 'Dirección', 'Micrófono'),
  new Card('Júpiter', 'Hacha', 'Desatar', 'Pobreza', 'Computadora'),
  new Card('Cafayate', 'Pañal', 'Fruncir', 'Media hora', 'Talón'),
  new Card('Estrella de mar', 'Valijas', 'Sintonizar', 'Tapón', 'Jabalina'),
  new Card('Esquiador', 'Cartel', 'Bostezar', 'Bailarina', 'Desodorante'),
  new Card('Mosca', 'Hélice', 'Erosionar', 'Vicio', 'Palma'),
  new Card(
    'Naciones Unidas (ONU)',
    'Buzón',
    'Emparchar',
    'Faro de automóvil',
    'Naftalina'
  ),
  new Card('Colegio', 'Lente', 'Escribir', 'Jeans', 'Rubio'),
  new Card('Africano', 'Camión', 'Ahorcar', 'Mirador', 'Coraza'),
  new Card('Doctor', 'Césped', 'Gotear', 'Gorra', 'Coro'),
  new Card(' Perro guardián', 'Semilla', 'Tango', 'Infinito', 'Doblado'),
  new Card('Oso', 'Juguete', 'Tirar', 'Furgón', 'Viejo'),
  new Card('Dique', ' Guante', 'Emigrar', 'Puntual', 'Buey'),
  new Card(
    'Granjero',
    'Teléfono público',
    'Inyectar',
    'Pierna rota',
    'Cajonera'
  ),
  new Card('Pavo real', 'Frutilla', 'Doblar', 'Cuento', 'Trampolín'),
  new Card(
    'Estación de subterráneo',
    'Percha',
    'Adornar',
    'Radiación',
    'Puente'
  ),
  new Card('Cupido', 'Campera', 'Agacharse', 'Alma', 'Mejilla'),
  new Card('Mandíbula', 'Pelota de fútbol', 'Desertar', 'Cristal', 'Esquiar'),
  new Card(
    'Sardina',
    'Ventilador',
    'Revocar',
    'Bola de billar',
    'Cirugía plástica'
  ),
  new Card('Rabino', 'Arpa', 'Sonrojarse', 'Caja de cartón', 'Gotas para ojos'),
  new Card(
    'Continente',
    'Sombrero de paja',
    'Desaparecer',
    'Fin',
    'Costa atlántica'
  ),
  new Card(
    'Antebrazo',
    'Escarbadientes',
    'Acolchonar',
    'Prueba de ruidos',
    'Transportador'
  ),
  new Card('Cataratas del Iguazú', 'Tijeras', 'Apoyar', 'Vara', 'Baranda'),
  new Card(
    'Búfalo',
    'Lentes de contacto',
    'Dar propina',
    'Sumergir',
    'Muñeco de nieve'
  ),
  new Card('Ciudad', 'Foto', 'Mover', 'Bolsa de papel', 'Palillos de batería'),
  new Card('Unión Soviética', 'Posavasos', 'Hurgar', 'Impresión', 'Picar'),
  new Card('Casa', 'Fuente', 'Recibir', 'Reloj digital', 'Pepita de oro'),
  new Card('Mecánico', 'Rifle', 'Inclinar', 'Manteca', 'Borde'),
  new Card('Padrastro', 'Sobretodo', 'Anunciar', 'Apagón', 'Terraza'),
  new Card('Jirafa', 'Rueda', 'Voltear', 'Sí', 'Cielo'),
  new Card('Padre', 'Sillón', 'Pedalear', 'Utilidad', 'Agua'),
  new Card('Novia', 'Cercado', 'Graficar', 'Muchos', 'Gente'),
  new Card('Finlandia', 'Dirigible', 'Falsificar', 'Bolitas', 'Lámpara de sol'),
  new Card('Museo', 'Lámina', 'Arrastrar', 'Indígena', 'Orilla'),
  new Card('Nudillo', 'Engranaje', 'Bombardear', 'Historieta', 'Traje a rayas'),
  new Card('Cangrejo', 'Hamaca', 'Minar', 'Señal de humo', 'En el aire'),
  new Card('Jaguar', 'Caballete de pintor', 'Llamar', 'Paella', 'Río'),
  new Card('Piloto', 'Boquilla', 'Hacer dedo', 'Sauna', 'Pequeño'),
  new Card('Eslabón perdido', 'Blusa', 'Calentar', 'Creciente', 'Izquierda'),
  new Card('Minero', 'Piedra', 'Forrar', 'Prolongador', 'Cadera'),
  new Card('Playboy', 'Lata de sardinas', 'Conducir', 'Vals', 'Audífono'),
  new Card('Egipto', 'Clips para papeles', 'Tejer', 'Novela', 'Jaula de loros'),
  new Card('Regazo', ' Caña de pescar', 'Ojear', 'Lenguaje', 'Ceniza'),
  new Card('Papá', 'Libro', 'Romper', 'Ortodoxo', 'Tótem'),
  new Card('Cuerpo', 'Sofá', 'Rechazar', 'Conducto', 'Esfera'),
  new Card('Inglaterra', 'Podadora', 'Linchar', 'Ejército', 'Poco'),
  new Card('Cuartel de bomberos', 'Banana', 'Invertir', 'Básquet', 'Alrededor'),
  new Card('Canadá', 'Lima de uñas', 'Ayudar', 'Asteroide', 'Olla'),
  new Card('Africa', 'Cama de agua', 'Batir', 'Torbellino', 'Tiza'),
  new Card('Río de la Plata', 'Lija', 'Abrazar', 'Dedo anular', 'Pirata'),
  new Card('Dentadura postiza', 'Cubo', 'Torpedear', 'Fragancia', 'Pelotón'),
  new Card('Papada', 'Televisor a color', 'Modelar', 'Mural', 'Vecindario'),
  new Card('Barba', 'Caramelo', 'Reír', 'Hilo', 'Oído'),
  new Card(
    'Batman',
    'Parrilla',
    'Perder',
    'Radioaficionado',
    'Mantel individual'
  ),
  new Card('Cuarto de juegos', 'Botas', 'Rodar', 'Yegua', 'Mímica'),
  new Card('Israel', 'Sandía', 'Programar', 'Fantasma', 'Mente'),
  new Card('Cementerio', 'Jet', 'Bañar', 'Adormecido', 'Lodo'),
  new Card('China', 'Media luna', 'Estrangular', 'Cajita de fósforos', 'Primo'),
  new Card('Refugio antiaéreo', 'Helicóptero', 'Resonar', 'Rabia', 'Autopista'),
  new Card('Hormiga', 'Calabaza', 'Borrar', 'Tienda', 'Osa Mayor'),
  new Card(
    'Casa Rosada',
    'Calendario',
    'Hervir',
    'Kilómetro',
    'Cuerda para saltar'
  ),
  new Card('Luciérnaga', 'Resortes', 'Ventilar', 'Espátula', 'Tren'),
  new Card('Rancho', 'Solapa', 'Enrular', 'Extranjero', 'Tope de puerta'),
  new Card('Chile', 'Muñeca', 'Derramar', 'Escenario', 'Canción'),
  new Card('Tigre', 'Trenza', 'Desafiar', 'Llave maestra', 'Alerones'),
  new Card('Castor', 'Vela', 'Afligirse', 'Alpiste', 'Caspa'),
  new Card('Italia', 'Mapamundi', 'Frenar', 'Biblia', 'Desierto del Sahara'),
  new Card('Cabra', 'Rayo de bicicleta', 'Mojar', 'Pinza de depilar', 'Dragón'),
  new Card('Francia', 'Lápiz', 'Galopar', 'Ruleta', 'Estaca'),
  new Card('Abuelo', 'Cucharita', 'Subir', ' Fila india', 'Fuego'),
  new Card('Galaxia', 'Colchón', 'Oscurecer', 'Navidad', 'Noche'),
  new Card('Pez dorado', 'Muñeca de trapo', 'Torneo', 'Frontera', 'Áspero'),
  new Card('Nueva York', 'Cuenta', 'Asegurar', 'Cama matrimonial', 'Cafetera'),
  new Card(
    'Cuadra',
    'Piñata',
    'Aterrizaje de emergencia',
    'Mirada',
    'Molino de viento'
  ),
  new Card('Hollywood', 'Peluca', 'Toparse', 'Cápsula', 'Capucha'),
  new Card('Hipopótamo', 'Fósil', 'Abrochar', 'Continuar', 'Empinado'),
  new Card('Oficina', 'Diamantes', 'Palpitar', 'Inmenso', 'Automóvil'),
  new Card('Avispón', 'Queso', 'Esposar', 'Lavarropa', 'Murciélago'),
  new Card('Brasil', 'Cebolla', 'Hundir', 'Arena', 'Cereza'),
  new Card('Cantante', 'Chal', 'Pisar', 'Dos por cuatro', 'Dados'),
  new Card('América Central', 'Dardos', 'Pavimentar', 'Estufa', 'Prisión'),
  new Card('Mezquita', 'Tatuaje', 'Enchufar', 'Separación', 'Glaciar'),
  new Card(
    'Pez espada',
    'Remedio',
    'Acercar',
    'Libertad bajo fianza',
    'Muletas'
  ),
  new Card(
    'Príncipe',
    'Canasta',
    'Embolsar',
    'Unánime',
    'Servicio de mensajería'
  ),
  new Card('Hogar', 'Mantel', 'Sentarse', 'Puerta trasera', 'Paraíso'),
  new Card(
    'Cráneo',
    'Objetivo',
    'Archivar',
    'Receta médica',
    'Rueda de auxilio'
  ),
  new Card(
    'Terminal de colectivos',
    'Estatua',
    'Soñar',
    'Convexo',
    'Instrumento'
  ),
  new Card('Sala', 'Destornillador', 'Pescar', 'Aflojar', 'Volcán'),
  new Card('Miami', 'Bolsa de arena', 'Cebar', 'Tracción', 'Alicates'),
  new Card('Caballo', 'Manguera', 'Agujerear', 'Inflación', 'Sombra'),
  new Card('Estadio', 'Hiedra', 'Marchar', 'Sermón', 'Pata de rana'),
  new Card('Ballena', 'Cinturón', 'Decolorar', 'Almuerzo', 'Termómetro'),
  new Card('Mercado', 'Banco', 'Cultivar', 'Bolsa de dormir', 'Entumecido'),
  new Card('Zorzal', 'Matamoscas', 'Aclarar', 'Dos puntos', 'Raya'),
  new Card(
    'Aleta de pez',
    'Bicicleta',
    'Destilar',
    'Límite de velocidad',
    'Profundo'
  ),
  new Card(
    'Presidente',
    'Sombrero de copa',
    'Peinar',
    'Riendas',
    'Torre Eiffel'
  ),
  new Card('Cachorro', 'Bikini', 'Saltar del trampolín', 'Ruidoso', 'Nuclear'),
  new Card('Abeja', 'Encaje', 'Cabalgar', 'Pancarta', 'Corte de cabello'),
  new Card('Colmillo', 'Clavel', 'Planear', 'Despegue', 'Curva'),
  new Card('Granero', 'Barrilete', 'Machacar', 'Regla de cálculo', 'Balcón'),
  new Card('Tarántula', 'Churros', 'Seguir', 'Filtro solar', 'Persona'),
  new Card('Músculo', 'Armario', 'Empastar', 'Caminata espacial', 'Faquir'),
  new Card('Carpintero', ' Silla reclinable', 'Secar', 'Millón', 'Rociar'),
  new Card('Lengua', 'Charango', 'Pinchar', 'En venta', 'Lealtad'),
  new Card('Roma', 'Eje', 'Contaminar', 'Relleno', 'Portátil'),
  new Card('Basurero', 'Salto de cama', 'Surcar', 'Toallero', 'Aurora boreal'),
  new Card('Mundo', 'Afeitadora', 'Medir', 'Sonámbulo', 'Piernas cruzadas'),
  new Card('Taiwán', 'Pollera', 'Llorar', 'Frente al lago', 'Corto'),
  new Card('Reno', 'Banda', 'Atascar', 'Diámetro', 'Control remoto'),
  new Card(
    'Pie',
    'Caja de sorpresas',
    'Vocear',
    'Botella de cerveza',
    'Tormenta de nieve'
  ),
  new Card('Faraón', 'Gaseosa', 'Roncar', 'Plata', 'Pista de esquí'),
  new Card('Moscú', 'Cinta', 'Cacarear', 'Interior', 'Rodilla'),
  new Card('Corazón', 'Parlante', 'Interceptar', 'Tiroteo', 'Pirámide'),
  new Card('Bigote', 'Radio', 'Dividir', 'Manecilla de reloj', 'Pimpollo'),
  new Card('Babosa', 'Tarjeta de crédito', 'Empapar', 'Maratón', 'Calvo'),
  new Card('Pulga', 'Bumerang', 'Deslumbrar', 'Resfrío', 'Toalla'),
  new Card('Polo Norte', 'Semáforo', 'Trasbordar', 'Nostalgia', 'Piso'),
  new Card('Barriga', 'Patines', 'Masajear', 'Caja de zapatos', 'Hongo'),
  new Card('Delfín', 'Señuelo', 'Rastrillar', 'Lastre', 'Religión'),
  new Card('Monstruo', 'Aire acondicionado', 'Evadir', 'Hueco', 'Chaucha'),
  new Card('Hija', 'Prismáticos', 'Inundar', 'Triple', 'Lamparita'),
  new Card('Tucumán', 'Silla de ruedas', 'Centrar', 'Año bisiesto', 'Trébol'),
  new Card('Jardín de niños', 'Cereal', 'Desabrochar', 'Solo', 'Dolor'),
  new Card(
    'Monte Everest',
    'Malla de reloj',
    'Invernar',
    'Esmeralda',
    'Alegría'
  ),
];
