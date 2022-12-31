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
  new Card('Hawai',
    'Valla',
    'Enmarcar',
    'Hamburguesa con queso',
    'Maremoto'
    ),
  new Card('Garaje',
    'Goma de borrar',
    'Empacar',
    'Cabaña',
    'Teñido'
    ),
  new Card('Pulso',
    'Hornalla',
    'Construir',
    'Vertical',
    'Lleno'
    ),
  new Card('Ojo',
    'Frambuesa',
    'Explotar',
    'Maquillaje',
    'Tacho de basura'
    ),
  new Card('Ratón',
    'Boleto',
    'Erupción',
    'Primera Guerra Mundial',
    'Visera'
    ),
  new Card('Verruga',
    'Estéreo',
    'Descubrir',
    'Escape',
    'Código Morse'
    ),
  new Card('Cuarto de baño',
    'Cenicero',
    'Alterar',
     'Tragar',
   ' Sirena de mar'
    ),
  new Card('Mano derecha',
    'Reloj pulsera',
    'Caer en picada',
    'De pared a pared',
    'Luna de miel'
    ),
  new Card('Pájaro carpintero',
    'Tomacorriente',
    'Desenvolver',
    'Podrido',
    'Cordero'
    ),
  new Card('Motel',
    'Títere',
    'Empujar',
    'Pastelería',
    'Espacio exterior'
    ),
  new Card('Machu Picchu',
    'Letrero',
    'Destapar',
    'Señalador de libro',
    'Aljibe'
    ),
  new Card('Tierra del Fuego',
    'Muelle',
    'Cortar',
    'Bosquejo',
    'Encuesta'
    ),
  new Card('Conductor',
    'Plato',
    'Ondular',
    'Tenis',
    'Barco'
    ),
  new Card('Loro',
    'Camiseta',
    'Agrupar',
    'Cuerdas vocales',
    'Concierto'
    ),
  new Card('Progenitor',
    'Azadón',
    'Secuestrar',
    'Línea de partida',
    'Lentejuelas'
    ),
  new Card('Perro',
    'Bolsillo',
    'Babear',
   'Caño de escape',
    'Derrumbe'
    ),
  new Card('Autocine',
    'Enredadera',
    'Roer',
    'Cáscara de banana',
    'Bombos'
    ),
  new Card('Polo Sur',
    'Toilette',
    'Comer',
    'Gema',
    'Seis en punto'
    ),
  new Card('Oeste',
    'Gradas',
    'Trasplantar',
    'Pulgada',
    'Funeral'
    ),
  new Card('Océano Pacífico',
    'Máquina de escribir',
    'Nadar',
    'Corderoy',
    'Bocina'
    ),
  new Card('Capital Federal',
    'Rompecabezas',
    'Evaporar',
    'Presión sanguínea',
    'Guerra'
    ),
  new Card('Compañero de cuarto',
    'Encendedor',
    'Surfing',
    'Pronunciar',
    'Tripulación'
    ),
  new Card('Sapo',
    'Altavoz',
    'Emboscar',
    'Pictionary',
    'Feria americana'
    ),
  new Card('Tortuga',
    'Trineo',
    'Entrar',
    'Bala de cañón',
    'Bidet'
    ),
  new Card('Alemania',
    'Tambor',
     'Regar',
    'Cocinero',
    'Oso hormiguero'
    ),
  new Card('España',
    'Globo',
    'Izar',
    'Fiebre amarilla',
    'Guión'
    ),
  new Card('Misiones',
    'Cerradura',
    'Emparejar',
    'Bolsa de valores',
    'Organillero'
    ),
  new Card('Establo',
    'Neumáticos',
    'Sangrar',
    'Niñera',
    'Insecto'
    ),
  new Card('Penthouse',
    'Sierra eléctrica',
    'Derrotar',
    'Rodilleras',
    'Cabina de teléfono'
    ),
  new Card('Canguro',
    'Lápiz de cejas',
    'Relampaguear',
    'Autopsia',
    'Apretón de manos'
    ),
  new Card('Pintura de guerra','Campanario' ,'Golf','Taxi','Dientes'),
  new Card('Nieta',
    'Red de seguridad',
    'Triturar',
    'Jarra',
   'Fracaso'
    ),
  new Card('Cejas',
    'Sales aromáticas',
     'Tostar',
    'Miedo',
    'Rico'
    ),
  new Card('Torero',
    'Álbum',
    'Visitar',
    'Refugio',
    'Diez en punto'
    ),
  new Card(' Pato Donald',
     'Píldora',
    'Robar',
    'Comedia',
    'Arte'
    ),
  new Card('Flamenco',
    'Puerta',
    'Arder',
    'Tormenta de arena',
    'Yate'
    ),
  new Card('Manicura',
    'Cactus',
    'Transpirar',
    'Pimienta',
    'Carpa india'
    ),
  new Card('Zorro',
    'Sacacorchos',
    'Entrevistar',
    'Primera página',
    'Tacos altos'
    ),
  new Card('Oficial',
    'Patín de hielo',
    'Madurar',
    'Carrera de obstáculos',
    'Alcatraz'
    ),
  new Card('Rambo',
    'Pantalla',
    'Freír',
    'Disposición',
    'Cruz roja'
    ),
  new Card( 'Rinoceronte',
    'Carpa',
    'Estirar',
    'Templo',
    'Robot'
    ),
  new Card('Piel de animal',
    'Balanza',
    'Asar',
    'Despegar',
    'Túnel'
    ),
  new Card('Leopardo',
    'Arbustos',
    'Oponer',
    'Malo',
    'Falsificación'
    ),
  new Card('Dentista',
     'Alhajas',
    'Superar',
    'Papelera',
    'Tostadora'
    ),
  new Card('Hawai',
    'Yunta',
    'Ladrar',
    'Año',
    'Escalones'
    ),
  new Card('Mujer barbuda',
    'Piano',
    'Empaquetar',
    'Infracción',
    'Contaminación'
    ),
  new Card('Langosta',
    'Adorno',
    'Rotar',
    'Geografía',
    'Locomotora'
    ),
  new Card('Perro ovejero',
    'Biombo',
    'Aburrir',
    'Geometría',
    'Impar'
    ),
  new Card('Panteón',
    'Barras paralelas',
    'Esculpir',
   ' Monóculo',
    'Llave'
    ),
    new Card('Azafata',
      'Almendra',
      'Preparar',
      'Bolsa de plástico',
      'Lazo'
      )
];

