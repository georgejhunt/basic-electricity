? '

  '
: {tag: '<para>

    ', xlate: !!python/unicode ''}
? '<bold>Jason Starck</bold> (June 2000): HTML document formatting, which led to a
  much better-looking second edition.

  '
: {tag: '<para>

    ', xlate: '<bold> Jason Starck </bold> (Junio ​​de 2000): Documento de formato
    HTML, lo que llevó a un mucho mejor aspecto segunda edición.'}
<bold>REVIEW:</bold>: {tag: <item>, xlate: '<bold> REVISIÓN: </bold>'}
'<bold>Ron LaPlante</bold> (October 1998): helped create <quote>table</quote>': {
  tag: '<para>

    ', xlate: '<bold> Ron LaPlante </bold> (Octubre de 1998): ayudó a crear <quote>
    mesa </quote>'}
? <italic>Soldering</italic> is a low-temperature welding process utilizing a lead/tin
  or tin/silver alloy to bond wires and component leads together, usually with the
  components secured to a fiberglass board.
: {tag: <item>, xlate: '<italic> Soldadura </italic> es un proceso de soldadura de
    baja temperatura que utiliza un plomo / estaño o de aleación de estaño / plata
    a los alambres de enlace y componente conduce en conjunto, por lo general con
    los componentes se fijan a un tablero de fibra de vidrio.'}
? <italic>Wire-wrapping</italic> is an alternative to soldering, involving small-gauge
  wire tightly wrapped around component leads rather than a welded joint to connect
  components together.
: {tag: <item>, xlate: '<italic> Alambre y embalaje </italic> es una alternativa a
    la soldadura, con la participación de alambre de calibre pequeño herméticamente
    envuelto alrededor de los cables de componentes en lugar de una unión soldada
    para conectar componentes juntos.'}
A <italic>shorted</italic> component is one whose resistance has dramatically decreased.: {
  tag: <item>, xlate: UN <italic> en corto </italic> componente es uno cuya resistencia
    ha disminuido dramáticamente.}
? A <italic>solderless breadboard</italic> is a device used to quickly assemble temporary
  circuits by plugging wires and components into electrically common spring-clips
  arranged underneath rows of holes in a plastic board.
: {tag: <item>, xlate: UN <italic> protoboard sin soldadura </italic> es un dispositivo
    utilizado para ensamblar rápidamente circuitos temporales enchufando cables y
    componentes en primavera-clips eléctricamente comunes dispuestas debajo de filas
    de agujeros en una placa de plástico.}
? A <italic>terminal strip</italic>, also known as a <italic>barrier strip</italic>
  or <italic>terminal block</italic> is another device used to mount components and
  wires to build circuits.  Screw terminals or heavy spring clips attached to metal
  bars provide connection points for the wire ends and component leads, these metal
  bars mounted separately to a piece of nonconducting material such as plastic, bakelite,
  or ceramic.
: {tag: <item>, xlate: 'UN <italic> tira de terminales </italic> , También conocido
    como <italic> tira de barrera </italic> o <italic> bloque de terminales </italic>
    es otro dispositivo que se utiliza para montar los componentes y cables para construir
    circuitos. Los bornes de tornillo o abrazaderas de resorte pesados ​​unidos a
    las barras de metal proporcionan puntos de conexión para los extremos de cables
    y terminales de componentes, montados estas barras de metal por separado a una
    pieza de material de no conductor, tal como plástico, baquelita, o cerámica.'}
A <quote>branch</quote>: {tag: <item>, xlate: !!python/unicode 'UN <quote> rama </quote>'}
? 'A parallel circuit is also easy to construct on a solderless breadboard:

  '
: {tag: '<para>

    ', xlate: 'Un circuito en paralelo también es fácil de construir en un circuito
    sin soldadura:'}
? 'A shorted resistor (resistance of 0 <OMEGA>) would theoretically draw infinite
  current from any finite source of voltage (I=E/0).  In this case, the zero resistance
  of R<subscript>2</subscript> decreases the circuit total resistance to zero <OMEGA>
  as well, increasing total current to a value of infinity.  As long as the voltage
  source holds steady at 9 volts, however, the other branch currents (I<subscript>R1</subscript>
  and I<subscript>R3</subscript>) will remain unchanged.

  '
: {tag: '<para>

    ', xlate: 'Una resistencia de cortocircuito (resistencia de 0 <OMEGA> ) Sería
    teóricamente tomar corriente infinita de cualquier fuente finita de voltaje (I
    = E / 0). En este caso, la resistencia cero de R <subscript> 2 </subscript> disminuye
    la resistencia total del circuito a cero <OMEGA> así, el aumento de corriente
    total a un valor de infinito. Siempre y cuando la fuente de tensión se mantiene
    constante a los 9 voltios, sin embargo, las otras corrientes de rama (I <subscript>
    R1 </subscript> y yo <subscript> R3 </subscript> ) Permanecerán sin cambios.'}
? 'A soldered or wire-wrapped circuit is considered permanent: that is, it is unlikely
  to fall apart accidently.  However, these construction techniques are sometimes
  considered <italic>too</italic> permanent.  If anyone wishes to replace a component
  or change the circuit in any substantial way, they must invest a fair amount of
  time undoing the connections.  Also, both soldering and wire-wrapping require specialized
  tools which may not be immediately available.

  '
: {tag: '<para>

    ', xlate: 'Un circuito de soldadura o alambre envuelto se considera permanente:
    es decir, es poco probable a desmoronarse accidentalmente. Sin embargo, estas
    técnicas de construcción a veces se consideran <italic> también </italic> permanente.
    Si alguien desea sustituir un componente o cambiar el circuito de una manera sustancial,
    deben invertir una buena cantidad de tiempo de deshacer las conexiones. Además,
    tanto la soldadura y el alambre de envoltura requieren herramientas especializadas
    que pueden no estar disponibles inmediatamente.'}
A view of this board's underside reveals the copper <quote>traces</quote>: {tag: '<para>

    ', xlate: !!python/unicode 'Una vista de la parte inferior de esta placa revela
    el cobre <quote> rastros </quote>'}
? "Again, we have three resistors, but this time they form more than one continuous\
  \ path for electrons to flow.  There's one path from 8 to 7 to 2 to 1 and back to\
  \ 8 again.  There's another from 8 to 7 to 6 to 3 to 2 to 1 and back to 8 again.\
  \  And then there's a third path from 8 to 7 to 6 to 5 to 4 to 3 to 2 to 1 and back\
  \ to 8 again.  Each individual path (through R<subscript>1</subscript>, R<subscript>2</subscript>,\
  \ and R<subscript>3</subscript>) is called a <italic>branch</italic>.  \n"
: {tag: '<para>

    ', xlate: 'Una vez más, tenemos tres resistencias, pero esta vez forman más de
    un camino continuo para que los electrones fluyan. Hay un camino desde 8 a 7 a
    2 a 1 y de nuevo a 8 de nuevo. Hay otra del 8 a 7 a 6 a 3 a 2 a 1 y de nuevo a
    8 de nuevo. Y luego hay una tercera trayectoria desde 8 a 7 a 6 a 5 a 4 a 3 a
    2 a 1 y de nuevo a 8 de nuevo. Cada camino individual (a través de R <subscript>
    1 </subscript> , R <subscript> 2 </subscript> Y R <subscript> 3 </subscript> )
    Se llama <italic> rama </italic> .'}
? 'All I''ve done here is re-numbered the lower-left corner of the circuit 0 instead
  of 4.  Now, I can enter several lines of text into a computer file describing the
  circuit in terms SPICE will understand, complete with a couple of extra lines of
  code directing the program to display voltage and current data for our viewing pleasure.  This
  computer file is known as the <italic>netlist</italic> in SPICE terminology:

  '
: {tag: '<para>

    ', xlate: 'Todo lo que he hecho aquí es renumerarán la esquina inferior izquierda
    del circuito 0 en lugar de 4. Ahora, puedo introducir varias líneas de texto en
    un archivo de computadora que describe el circuito en términos SPICE pueda entender,
    completa con un par de líneas adicionales de código que dirigen el programa para
    mostrar los datos de voltaje y corriente para nuestro placer visual. Este archivo
    de ordenador es conocido como el <italic> lista de conexiones </italic> en la
    terminología SPICE:'}
? An <italic>open</italic> component is one whose resistance has dramatically increased.  For
  the record, resistors tend to fail open more often than fail shorted, and they almost
  never fail unless physically or electrically overstressed (physically abused or
  overheated).
: {tag: <item>, xlate: 'Un <italic> abierto </italic> componente es uno cuya resistencia
    ha aumentado de manera espectacular. Para el registro, resistencias tienden a
    fallar abierto más a menudo que fracasan en corto, y que casi nunca fallan a menos
    física o eléctricamente estresado (abusos físicos o sobrecalentado).'}
? "An alternative construction technique used throughout the industrial world is that\
  \ of the <italic>terminal strip</italic>.  Terminal strips, alternatively called\
  \ <italic>barrier strips</italic> or <italic>terminal blocks</italic>, are comprised\
  \ of a length of nonconducting material with several small bars of metal embedded\
  \ within.  Each metal bar has at least one machine screw or other fastener under\
  \ which a wire or component lead may be secured.  Multiple wires fastened by one\
  \ screw are made electrically common to each other, as are wires fastened to multiple\
  \ screws on the same bar.  The following photograph shows one style of terminal\
  \ strip, with a few wires attached.  \n"
: {tag: '<para>

    ', xlate: 'Una técnica de construcción alternativo utilizado en todo el mundo
    industrial es el de la <italic> tira de terminales </italic> . regletas de terminales,
    alternativamente llamados <italic> tiras de barrera </italic> o <italic> bloques
    de terminales </italic> , Se componen de una longitud de material no conductor
    con varios bares pequeños de metal incrustada dentro. Cada barra de metal tiene
    al menos un tornillo de máquina u otro sujetador en las que un conductor de cable
    o componente puede ser asegurado. Múltiples cables sujetados por un tornillo se
    hacen eléctricamente comunes entre sí, como son los cables fijados a múltiples
    tornillos en la misma barra. La siguiente fotografía muestra un estilo de regleta
    de bornes, con unos pocos cables conectados.'}
? An essential skill to have is a ready and intuitive understanding of how component
  faults affect circuits in different configurations.  We will explore some of the
  effects of component faults in both series and parallel circuits here, then to a
  greater degree at the end of the <quote>Series-Parallel Combination Circuits</quote>
: {tag: '<para>

    ', xlate: 'Una habilidad esencial para tener una comprensión intuitiva listo y
    de cómo afectan los fallos de componentes en circuitos diferentes configuraciones.
    Vamos a explorar algunos de los efectos de las fallas de los componentes en ambas
    series y circuitos paralelos aquí, a continuación, en un grado mayor al final
    de la <quote> Circuitos combinación en serie-paralelo </quote>'}
? An example like this makes the rationale of node numbers in SPICE fairly clear to
  understand.  By having all components share common sets of numbers, the computer
  <quote>knows</quote>
: {tag: '<para>

    ', xlate: 'Un ejemplo como este hace que la lógica de los números de nodo en SPICE
    bastante clara de entender. Al tener todos los componentes comparten conjuntos
    comunes de los números, el ordenador <quote> sabe </quote>'}
? 'An example of a <italic>printed circuit board</italic>, or <italic>PCB</italic>,
  intended for hobbyist use is shown in this photograph:

  '
: {tag: '<para>

    ', xlate: 'Un ejemplo de una <italic> placa de circuito impreso </italic> o <italic>
    tarjeta de circuito impreso </italic> , Destinado para uso aficionado se muestra
    en esta fotografía:'}
? 'An important caveat to Ohm''s Law is that all quantities (voltage, current, resistance,
  and power) must relate to each other in terms of the same two points in a circuit.  For
  instance, with a single-battery, single-resistor circuit, we could easily calculate
  any quantity because they all applied to the same two points in the circuit:

  '
: {tag: '<para>

    ', xlate: 'Una advertencia importante a la ley de Ohm es que todas las magnitudes
    (tensión, corriente, resistencia y potencia) deben estar relacionados entre sí
    en términos de los mismos dos puntos en un circuito. Por ejemplo, con una sola
    batería, circuito de una sola resistencia, que puede fácilmente calcular cualquier
    cantidad, ya que todos aplican a los mismos dos puntos del circuito:'}
? 'An interesting rule for total power versus individual power is that it is additive
  for <italic>any</italic> configuration of circuit: series, parallel, series/parallel,
  or otherwise.  Power is a measure of rate of work, and since power dissipated <italic>must</italic>
  equal the total power applied by the source(s) (as per the Law of Conservation of
  Energy in physics), circuit configuration has no effect on the mathematics.

  '
: {tag: '<para>

    ', xlate: 'Una regla interesante para la potencia total en comparación con el
    poder individual es que es aditivo para <italic> alguna </italic> configuración
    de circuito: serie, paralelo, en serie / paralelo, o de otra manera. El poder
    es una medida de la velocidad de trabajo, y dado que potencia disipada <italic>
    debe </italic> igual a la potencia total aplicada por la fuente (s) (según la
    ley de la conservación de la energía en la física), la configuración del circuito
    no tiene efecto en las matemáticas.'}
? 'And, of course, the complexity doesn''t stop at simple series and parallel either!  We
  can have circuits that are a combination of series and parallel, too:

  '
: {tag: '<para>

    ', xlate: 'Y, por supuesto, la complejidad no se detiene en simple serie y en
    paralelo, ya sea! Podemos tener circuitos que son una combinación de serie y en
    paralelo, también:'}
? 'Another industrial convention is to modify the schematic diagram slightly so as
  to indicate actual wire connection points on the terminal strip.  This demands a
  labeling system for the strip itself: a <quote>TB</quote>'
: {tag: '<para>

    ', xlate: 'Otra convención industrial es modificar el diagrama esquemático ligeramente
    a fin de indicar los puntos de conexión de cables reales en la regleta de bornes.
    Esto exige un sistema de etiquetado de la propia banda: una <quote> tuberculosis
    </quote>'}
? Another, smaller terminal strip is shown in this next photograph.  This type, sometimes
  referred to as a <quote>European</quote>
: {tag: '<para>

    ', xlate: 'Otro, tira terminal más pequeño se muestra en esta siguiente fotografía.
    Este tipo, a veces referido como una <quote> europeo </quote>'}
Apply Ohm's Law to vertical columns in the table.: {tag: <item>, xlate: !!python/unicode 'Aplicar
    la ley de Ohm a las columnas verticales de la tabla.'}
Apply rules of series/parallel to horizontal rows in the table.: {tag: <item>, xlate: !!python/unicode 'Aplicar
    reglas de serie / paralelo a las filas horizontales de la tabla.'}
? As a footnote, the unit of siemens is never expressed without the last letter <quote>s.</quote>  In
  other words, there is no such thing as a unit of <quote>siemen</quote> as there
  is in the case of the <quote>ohm</quote> or the <quote>mho.</quote>  The reason
  for this is the proper spelling of the respective scientists' surnames.  The unit
  for electrical resistance was named after someone named <quote>Ohm,</quote> whereas
  the unit for electrical conductance was named after someone named <quote>Siemens,</quote>
  therefore it would be improper to <quote>singularize</quote> the latter unit as
  its final <quote>s</quote>
: {tag: '<para>

    ', xlate: 'Como una nota al pie, la unidad de Siemens no se expresa sin la última
    letra <quote> s. </quote> En otras palabras, no hay tal cosa como una unidad de
    <quote> siemen </quote> como la hay en el caso de la <quote> ohm </quote> o el
    <quote> mho. </quote> La razón de esto es la ortografía de los apellidos de los
    respectivos científicos. La unidad de resistencia eléctrica lleva el nombre de
    alguien llamado <quote> Ohm, </quote> mientras que la unidad de conductancia eléctrica
    lleva el nombre de alguien llamado <quote> Siemens, </quote> por lo tanto, sería
    impropio <quote> singularizar </quote> la última unidad como su último <quote>
    s </quote>'}
? 'As the circuit current increases from 20 milliamps to 60 milliamps, the voltage
  drops across R<subscript>1</subscript> and R<subscript>3</subscript> (which haven''t
  changed resistances) increase as well, so that the two resistors are dropping the
  whole 9 volts.  R<subscript>2</subscript>, being bypassed by the very low resistance
  of the jumper wire, is effectively eliminated from the circuit, the resistance from
  one lead to the other having been reduced to zero.  Thus, the voltage drop across
  R<subscript>2</subscript>, even with the increased total current, is zero volts.

  '
: {tag: '<para>

    ', xlate: 'Como el circuito aumenta la corriente de 20 miliamperios a 60 miliamperios,
    las caídas de tensión a través de R <subscript> 1 </subscript> y R <subscript>
    3 </subscript> (Que no han cambiado resistencias) aumentar, así, de modo que las
    dos resistencias están cayendo todo el 9 voltios. R <subscript> 2 </subscript>
    , Que está siendo desviado por la muy baja resistencia de la cable de puente,
    se elimina de manera efectiva desde el circuito, la resistencia de un cable a
    la otra después de haber sido reducido a cero. Por lo tanto, la caída de voltaje
    a través de R <subscript> 2 </subscript> , Incluso con la corriente total aumentado,
    es cero voltios.'}
? 'As the total current exits the negative (-) battery terminal at point 8 and travels
  through the circuit, some of the flow splits off at point 7 to go up through R<subscript>1</subscript>,
  some more splits off at point 6 to go up through R<subscript>2</subscript>, and
  the remainder goes up through R<subscript>3</subscript>.  Like a river branching
  into several smaller streams, the combined flow rates of all streams must equal
  the flow rate of the whole river.  The same thing is encountered where the currents
  through R<subscript>1</subscript>, R<subscript>2</subscript>, and R<subscript>3</subscript>
  join to flow back to the positive terminal of the battery (+) toward point 1: the
  flow of electrons from point 2 to point 1 must equal the sum of the (branch) currents
  through R<subscript>1</subscript>, R<subscript>2</subscript>, and R<subscript>3</subscript>.

  '
: {tag: '<para>

    ', xlate: 'A medida que la corriente total sale del negativo (-) de la batería
    en el punto 8 y viaja a través del circuito, una parte del flujo se separa en
    el punto 7 a subir a través de R <subscript> 1 </subscript> , Algunas divisiones
    más fuera en el punto 6 para ir a través de R <subscript> 2 </subscript> , Y el
    resto pasa a través de R <subscript> 3 </subscript> . Como un río ramificación
    en varias corrientes más pequeñas, los caudales combinados de todas las corrientes
    debe ser igual a la velocidad de flujo de todo el río. Lo mismo se encontró en
    las corrientes a través de R <subscript> 1 </subscript> , R <subscript> 2 </subscript>
    Y R <subscript> 3 </subscript> unirse a fluir de vuelta al terminal positivo de
    la batería (+) hacia el punto 1: el flujo de electrones desde el punto 2 al punto
    1 debe ser igual a la suma de la (rama) corrientes a través de R <subscript> 1
    </subscript> , R <subscript> 2 </subscript> Y R <subscript> 3 </subscript> .'}
? As you can see from the arrangement of the data, we can't apply the 9 volts of E<subscript>T</subscript>
  (total voltage) to any of the resistances (R<subscript>1</subscript>, R<subscript>2</subscript>,
  or R<subscript>3</subscript>) in any Ohm's Law formula because they're in different
  columns.  The 9 volts of battery voltage is <italic>not</italic> applied directly
  across R<subscript>1</subscript>, R<subscript>2</subscript>, or R<subscript>3</subscript>.  However,
  we can use our <quote>rules</quote>
: {tag: '<para>

    ', xlate: 'Como se puede ver en la disposición de los datos, no podemos aplicar
    los 9 voltios de E <subscript> T </subscript> (Tensión total) a cualquiera de
    las resistencias (R <subscript> 1 </subscript> , R <subscript> 2 </subscript>
    O R <subscript> 3 </subscript> ) En la fórmula ley de Ohm cualquiera porque están
    en diferentes columnas. Las 9 voltios de tensión de la batería es <italic> no
    </italic> se aplica directamente a través de R <subscript> 1 </subscript> , R
    <subscript> 2 </subscript> O R <subscript> 3 </subscript> . Sin embargo, podemos
    utilizar nuestro <quote> reglas </quote>'}
? At this point we still don't know what the total current or total resistance for
  this parallel circuit is, so we can't apply Ohm's Law to the rightmost (<quote>Total</quote>)
  column.  However, if we think carefully about what is happening it should become
  apparent that the total current must equal the sum of all individual resistor (<quote>branch</quote>
: {tag: '<para>

    ', xlate: 'En este punto todavía no sabemos lo que la resistencia actual o total
    total para este circuito paralelo es, por lo que no podemos aplicar la ley de
    Ohm a la derecha ( <quote> Total </quote> ) Columna. Sin embargo, si pensamos
    cuidadosamente acerca de lo que está sucediendo debería ser evidente que la corriente
    total debe ser igual a la suma de toda resistencia individuo ( <quote> rama </quote>'}
? 'Back to our parallel circuit example, we should be able to see that multiple paths
  (branches) for current reduces total resistance for the whole circuit, as electrons
  are able to flow easier through the whole network of multiple branches than through
  any one of those branch resistances alone.  In terms of <italic>resistance</italic>,
  additional branches result in a lesser total (current meets with less opposition).  In
  terms of <italic>conductance</italic>, however, additional branches results in a
  greater total (electrons flow with greater conductance):

  '
: {tag: '<para>

    ', xlate: 'Volviendo a nuestro ejemplo circuito paralelo, debemos ser capaces
    de ver que varias rutas (ramas) de corriente reduce la resistencia total para
    todo el circuito, ya que los electrones son capaces de fluir fácil a través de
    toda la red de múltiples ramas que a través de cualquiera de los rama resistencias
    solo. En términos de <italic> resistencia </italic> , Ramas adicionales resultan
    en un total menor (actual cumple con menos oposición). En términos de <italic>
    conductancia </italic> Sin embargo, las ramas adicionales resulta en un total
    mayor (los electrones fluyen con mayor conductancia):'}
? 'Breadboards have their limitations, though.  First and foremost, they are intended
  for <italic>temporary</italic> construction only.  If you pick up a breadboard,
  turn it upside-down, and shake it, any components plugged into it are sure to loosen,
  and may fall out of their respective holes.  Also, breadboards are limited to fairly
  low-current (less than 1 amp) circuits.  Those spring clips have a small contact
  area, and thus cannot support high currents without excessive heating.

  '
: {tag: '<para>

    ', xlate: 'Breadboards tienen sus limitaciones, sin embargo. Primero y ante todo,
    que estén destinados a <italic> temporal </italic> construcción única. Si usted
    toma un tablero, ponga boca abajo y sacudirlo, cualquiera de los componentes conectados
    a ellos están seguros para aflojar, y pueden caer fuera de sus respectivos agujeros.
    También, placas universales se limitan a los circuitos bastante bajas corrientes
    (menos de 1 amperio). Esas pinzas de resorte tienen una pequeña área de contacto,
    y por lo tanto no pueden soportar altas corrientes sin un calentamiento excesivo.'}
Building simple resistor circuits: {tag: <sectiontitle>, xlate: La construcción de
    circuitos de resistencias simples}
? 'But, since we don''t know the voltage across R<subscript>1</subscript> (only the
  total voltage supplied by the battery across the three-resistor series combination)
  and we don''t know the current through R<subscript>1</subscript>, we can''t do any
  calculations with either formula.  The same goes for R<subscript>2</subscript> and
  R<subscript>3</subscript>: we can apply the Ohm''s Law equations if and only if
  all terms are representative of their respective quantities between the same two
  points in the circuit.

  '
: {tag: '<para>

    ', xlate: 'Pero, ya que no conocemos el voltaje a través de R <subscript> 1 </subscript>
    (Sólo la tensión total suministrada por la batería a través de la combinación
    en serie de tres resistencia) y no sabemos la corriente a través de R <subscript>
    1 </subscript> , Que no podemos hacer ningún cálculo con cualquiera de las fórmulas.
    Lo mismo ocurre con R <subscript> 2 </subscript> y R <subscript> 3 </subscript>
    : Podemos aplicar las ecuaciones de la Ley de Ohm si y sólo si todos los términos
    son representativos de sus respectivos cantidades entre los mismos dos puntos
    del circuito.'}
? Carrying this idea further, a symbol and unit were created to represent conductance.  The
  symbol is the capital letter <quote>G</quote> and the unit is the <italic>mho</italic>,
  which is <quote>ohm</quote> spelled backwards (and you didn't think electronics
  engineers had any sense of humor!).  Despite its appropriateness, the unit of the
  mho was replaced in later years by the unit of <italic>siemens</italic> (abbreviated
  by the capital letter <quote>S</quote>
: {tag: '<para>

    ', xlate: 'Llevar esta idea, un símbolo y la unidad fueron creados para representar
    la conductancia. El símbolo es la letra mayúscula <quote> GRAMO </quote> y la
    unidad es la <italic> mho </italic> , cual es <quote> ohm </quote> escrito al
    revés (y que no creía que los ingenieros electrónicos tenían ningún sentido del
    humor!). A pesar de su conveniencia, la unidad de la MHO fue reemplazado en los
    últimos años por la unidad de <italic> Siemens </italic> (Abreviado por la letra
    mayúscula <quote> S </quote>'}
Check your calculations by working <quote>backwards</quote>: {tag: <item>, xlate: Revisar
    sus cálculos trabajando <quote> hacia atrás </quote>}
? 'Circuits consisting of just one battery and one load resistance are very simple
  to analyze, but they are not often found in practical applications.  Usually, we
  find circuits where more than two components are connected together.

  '
: {tag: '<para>

    ', xlate: 'Circuitos que constan de una sola batería y una resistencia de carga
    son muy fáciles de analizar, pero no se encuentran a menudo en aplicaciones prácticas.
    Por lo general, nos encontramos con circuitos en los que más de dos componentes
    están conectados entre sí.'}
Component failure analysis: {tag: <sectiontitle>, xlate: el análisis de fallos de
    componentes}
? 'Components in a parallel circuit share the same voltage: E<subscript>Total</subscript>
  = E<subscript>1</subscript> = E<subscript>2</subscript> = . . . E<subscript>n</subscript>'
: {tag: <item>, xlate: 'Los componentes en un circuito en paralelo comparten la misma
    tensión: E <subscript> Total </subscript> E = <subscript> 1 </subscript> E = <subscript>
    2 </subscript> =. . . mi <subscript> norte </subscript>'}
? 'Components in a series circuit share the same current: I<subscript>Total</subscript>
  = I<subscript>1</subscript> = I<subscript>2</subscript> = . . . I<subscript>n</subscript>'
: {tag: <item>, xlate: !!python/unicode 'Los componentes en un circuito en serie comparten
    la misma corriente: I <subscript> Total </subscript> = I <subscript> 1 </subscript>
    = I <subscript> 2 </subscript> =. . . yo <subscript> norte </subscript>'}
Conductance: {tag: <sectiontitle>, xlate: !!python/unicode 'Conductancia'}
Conductance is symbolized with the letter <quote>G</quote>: {tag: <item>, xlate: !!python/unicode 'Conductancia
    se simboliza con la letra <quote> GRAMO </quote>'}
? 'Conductance is the opposite of resistance: the measure of how <italic>easy</italic>
  it is for electrons to flow through something.'
: {tag: <item>, xlate: 'La conductancia es lo contrario de la resistencia: la medida
    de la <italic> fácil </italic> es para que los electrones fluyen a través de algo.'}
? 'Continue this process, wire by wire, until all connections in the schematic diagram
  have been accounted for.  It might be helpful to regard common wires in a SPICE-like
  fashion: make all connections to a common wire in the circuit as one step, making
  sure each and every component with a connection to that wire actually has a connection
  to that wire before proceeding to the next.  For the next step, I''ll show how the
  top sides of the remaining two resistors are connected together, being common with
  the wire secured in the previous step:

  '
: {tag: '<para>

    ', xlate: 'Continuar este proceso, el alambre por hilo, hasta que todas las conexiones
    en el diagrama esquemático han tenido en cuenta. Podría ser útil considerar los
    cables comunes de una manera SPICE-como: hacer que todas las conexiones a un cable
    común en el circuito como un paso, asegurándose de que todos y cada componente
    con una conexión con ese alambre en realidad tiene una conexión con ese alambre
    antes de continuar a la siguiente. Para el siguiente paso, voy a mostrar cómo
    los lados superiores de las dos resistencias restantes están conectadas entre
    sí, siendo común con el hilo asegurado en el paso anterior:'}
Contributors: {tag: <sectiontitle>, xlate: !!python/unicode 'colaboradores'}
? 'Contributors to this chapter are listed in chronological order of their contributions,
  from most recent to first.  See Appendix 2 (Contributor List) for dates and contact
  information.

  '
: {tag: '<para>

    ', xlate: 'Los colaboradores para este capítulo se enumeran en orden cronológico
    de sus contribuciones, desde el más reciente al principio. Véase el Apéndice 2
    (Lista Colaborador) para fechas e información de contacto.'}
Correct use of Ohm's Law: {tag: <sectiontitle>, xlate: !!python/unicode 'El uso correcto
    de la ley de Ohm'}
? 'Deriving values <italic>horizontally</italic> across columns is allowable as per
  the principles of series and parallel circuits:

  '
: {tag: '<para>

    ', xlate: 'Derivación de valores <italic> horizontalmente </italic> través de
    las columnas es permisible de acuerdo con los principios de circuitos en serie
    y en paralelo:'}
? 'Eventually in this book I will lead you through the analysis of circuits <italic>without
  the use of any numbers</italic>, that is, analyzing the effects of component failure
  in a circuit without knowing exactly how many volts the battery produces, how many
  ohms of resistance is in each resistor, etc.  This section serves as an introductory
  step to that kind of analysis.

  '
: {tag: '<para>

    ', xlate: 'Finalmente, en este libro te ayudará a completar el análisis de circuitos
    <italic> sin el uso de cualesquiera números </italic> , Es decir, el análisis
    de los efectos de la falla de un componente en un circuito sin saber exactamente
    cuántos voltios produce la batería, el número de ohmios de resistencia se encuentra
    en cada resistencia, etc. Esta sección sirve como un paso de introducción a ese
    tipo de análisis.'}
Finally, applying Ohm's Law to the rightmost (<quote>Total</quote>: {tag: '<para>

    ', xlate: 'Por último, la aplicación de la ley de Ohm a la derecha ( <quote> Total
    </quote>'}
? 'Finally, we can use Ohm''s Law to determine the voltage drop across each resistor,
  one column at a time:

  '
: {tag: '<para>

    ', xlate: 'Por último, podemos utilizar la ley de Ohm para determinar la caída
    de tensión en cada resistencia, una columna a la vez:'}
? 'For R<subscript>1</subscript>, Ohm''s Law will relate the amount of voltage across
  R<subscript>1</subscript> with the current through R<subscript>1</subscript>, given
  R<subscript>1</subscript>''s resistance, 3k<OMEGA>:

  '
: {tag: '<para>

    ', xlate: 'para R <subscript> 1 </subscript> , Ley de Ohm se relacionará la cantidad
    de voltaje a través de R <subscript> 1 </subscript> con la corriente a través
    de R <subscript> 1 </subscript> , Dado R <subscript> 1 </subscript> &#39;S resistencia,
    3k <OMEGA> :'}
? For greater permanence, one might wish to choose soldering or wire-wrapping.  These
  techniques involve fastening the components and wires to some structure providing
  a secure mechanical location (such as a phenolic or fiberglass board with holes
  drilled in it, much like a breadboard without the intrinsic spring-clip connections),
  and then attaching wires to the secured component leads.  Soldering is a form of
  low-temperature welding, using a tin/lead or tin/silver alloy that melts to and
  electrically bonds copper objects.  Wire ends soldered to component leads or to
  small, copper ring <quote>pads</quote>
: {tag: '<para>

    ', xlate: 'Para mayor permanencia, uno podría desear para elegir la soldadura
    o alambre y embalaje. Estas técnicas implican la fijación de los componentes y
    cables en cierta estructura que proporciona una ubicación mecánica segura (tal
    como una placa fenólica o de fibra de vidrio con agujeros perforados en él, como
    un tablero sin las conexiones de borne intrínsecos), y luego unir los cables al
    asegurado terminales de componentes. La soldadura es una forma de soldadura de
    baja temperatura, utilizando un estaño / plomo o de aleación de estaño / plata
    que se funde a y eléctricamente une objetos de cobre. Extremos de alambre soldado
    a terminales de componentes o de anillo pequeño, cobre <quote> almohadillas </quote>'}
? 'From the way that the 9 volt battery is arranged, we can tell that the electrons
  in this circuit will flow in a counter-clockwise direction, from point 4 to 3 to
  2 to 1 and back to 4.  However, we have one source of voltage and three resistances.  How
  do we use Ohm''s Law here?

  '
: {tag: '<para>

    ', xlate: 'Por la forma en que la batería de 9 voltios está dispuesto, podemos
    decir que los electrones en este circuito fluirá en sentido contrario a las agujas
    del reloj, desde el punto 4 a 3 a 2 a 1 y de nuevo a 4. Sin embargo, tenemos una
    fuente de voltaje y tres resistencias. ¿Cómo podemos utilizar la ley de Ohm aquí?'}
? Here, we have three resistors (labeled R<subscript>1</subscript>, R<subscript>2</subscript>,
  and R<subscript>3</subscript>), connected in a long chain from one terminal of the
  battery to the other.  (It should be noted that the subscript labeling -- those
  little numbers to the lower-right of the letter <quote>R</quote>
: {tag: '<para>

    ', xlate: 'En este caso, tenemos tres resistencias (R etiquetado <subscript> 1
    </subscript> , R <subscript> 2 </subscript> Y R <subscript> 3 </subscript> ),
    Conectado en una cadena larga de un terminal de la batería a la otra. (Cabe señalar
    que el etiquetado subíndice - esos pequeños números a la parte inferior derecha
    de la carta <quote> R </quote>'}
? 'However, in circuits containing more than one resistor, we must be careful in how
  we apply Ohm''s Law.  In the three-resistor example circuit below, we know that
  we have 9 volts between points 1 and 4, which is the amount of electromotive force
  trying to push electrons through the series combination of R<subscript>1</subscript>,
  R<subscript>2</subscript>, and R<subscript>3</subscript>.  However, we cannot take
  the value of 9 volts and divide it by 3k, 10k or 5k <OMEGA> to try to find a current
  value, because we don''t know how much voltage is across any one of those resistors,
  individually.

  '
: {tag: '<para>

    ', xlate: 'Sin embargo, en los circuitos que contienen más de un resistor, hay
    que tener cuidado en cómo aplicamos la ley de Ohm. En el ejemplo de circuito de
    tres resistor a continuación, sabemos que tenemos 9 voltios entre los puntos 1
    y 4, que es la cantidad de fuerza electromotriz tratando de empujar los electrones
    a través de la combinación en serie de R <subscript> 1 </subscript> , R <subscript>
    2 </subscript> Y R <subscript> 3 </subscript> . Sin embargo, no podemos tomar
    el valor de 9 voltios y se divide por 3k, 10k o 5k <OMEGA> para tratar de encontrar
    un valor actual, ya que no sabemos cuánto voltaje es a través de cualquiera de
    esas resistencias, de forma individual.'}
? 'However, the method we just used to analyze this simple series circuit can be streamlined
  for better understanding.  By using a table to list all voltages, currents, and
  resistances in the circuit, it becomes very easy to see which of those quantities
  can be properly related in any Ohm''s Law equation:

  '
: {tag: '<para>

    ', xlate: 'Sin embargo, el método que la utilizamos para analizar este circuito
    en serie simple puede ser simplificado para una mejor comprensión. Mediante el
    uso de una tabla para listar todos los voltajes, corrientes y resistencias en
    el circuito, se hace muy fácil ver cuál de estas cantidades pueden ser adecuadamente
    en la ecuación relaciona la ley de Ohm ninguna:'}
? 'If all we wish to construct is a simple single-battery, single-resistor circuit,
  we may easily use <italic>alligator clip</italic> jumper wires like this:

  '
: {tag: '<para>

    ', xlate: 'Si todo lo que deseamos construir es un circuito simple de una sola
    batería, una sola resistencia, podemos utilizar simplemente <italic> pinza </italic>
    cables de puente como este:'}
? 'If the terminal strip uses machine screws to hold the component and wire ends,
  nothing but a screwdriver is needed to secure new connections or break old connections.  Some
  terminal strips use spring-loaded clips -- similar to a breadboard''s except for
  increased ruggedness -- engaged and disengaged using a screwdriver as a push tool
  (no twisting involved).  The electrical connections established by a terminal strip
  are quite robust, and are considered suitable for both permanent and temporary construction.

  '
: {tag: '<para>

    ', xlate: 'Si la tira terminal utiliza tornillos de la máquina para mantener los
    extremos de los componentes y cables, nada más que un destornillador es necesario
    para asegurar nuevas conexiones o romper las conexiones antiguas. Algunas tiras
    terminales utilizan clips de resorte - similar a un tablero de a excepción de
    una mayor robustez - activa y desactiva utilizando un destornillador como herramienta
    de empuje (sin torsión en cuestión). Las conexiones eléctricas establecidas por
    una regleta de terminales son bastante robustos, y se consideran adecuados tanto
    para la construcción permanente y temporal.'}
? 'If we know that conductance is nothing more than the mathematical reciprocal (1/x)
  of resistance, we can translate each term of the above formula into resistance by
  substituting the reciprocal of each respective conductance:

  '
: {tag: '<para>

    ', xlate: 'Si sabemos que la conductancia es nada más que el recíproco matemática
    (1 / x) de la resistencia, podemos traducir cada término de la fórmula anterior
    en la resistencia mediante la sustitución de la recíproca de cada conductancia
    respectiva:'}
If we wanted to build a simple series circuit with one battery and three resistors, the same <quote>point-to-point</quote>: {
  tag: '<para>

    ', xlate: 'Si quisiéramos construir un circuito simple serie con una batería y
    tres resistencias, la misma <quote> punto a punto </quote>'}
? In a parallel circuit, all components are connected across each other, forming exactly
  two sets of electrically common points.
: {tag: <item>, xlate: 'En un circuito en paralelo, todos los componentes están conectados
    a través de cada otro, formando exactamente dos conjuntos de puntos eléctricamente
    comunes.'}
In a series circuit, all components are connected end-to-end, forming a single path for electrons to flow.: {
  tag: <item>, xlate: 'En un circuito en serie, todos los componentes están conectados
    de extremo a extremo, formando una única ruta para los electrones fluyan.'}
? 'In an ideal case (with perfect voltage sources and zero-resistance connecting wire),
  shorted resistors in a simple parallel circuit will also have no effect on what''s
  happening in other branches of the circuit.  In real life, the effect is not quite
  the same, and we''ll see why in the following example:

  '
: {tag: '<para>

    ', xlate: 'En un caso ideal (con fuentes de tensión perfectos y cable de conexión
    de resistencia cero), resistencias en cortocircuito en un circuito paralelo sencilla
    también tendrá ningún efecto sobre lo que está sucediendo en otras ramas del circuito.
    En la vida real, el efecto no es exactamente lo mismo, y vamos a ver por qué en
    el siguiente ejemplo:'}
? 'In essence, we''ve calculated the equivalent resistance of R<subscript>1</subscript>,
  R<subscript>2</subscript>, and R<subscript>3</subscript> combined.  Knowing this,
  we could re-draw the circuit with a single equivalent resistor representing the
  series combination of R<subscript>1</subscript>, R<subscript>2</subscript>, and
  R<subscript>3</subscript>:

  '
: {tag: '<para>

    ', xlate: 'En esencia, hemos calculado la resistencia equivalente R <subscript>
    1 </subscript> , R <subscript> 2 </subscript> Y R <subscript> 3 </subscript> conjunto.
    Sabiendo esto, se podría volver a dibujar el circuito con una sola resistencia
    equivalente que representa la combinación en serie de R <subscript> 1 </subscript>
    , R <subscript> 2 </subscript> Y R <subscript> 3 </subscript> :'}
? In order to display branch currents in SPICE, we need to insert zero-voltage sources
  in line (in series) with each resistor, and then reference our current measurements
  to those sources.  For whatever reason, the creators of the SPICE program made it
  so that current could only be calculated <italic>through</italic> a voltage source.  This
  is a somewhat annoying demand of the SPICE simulation program.  With each of these
  <quote>dummy</quote>
: {tag: '<para>

    ', xlate: 'Con el fin de mostrar corrientes de rama en SPICE, necesitamos insertar
    fuentes libres de potencial en línea (en serie) con cada resistencia, y después
    hacer referencia a nuestras mediciones de corriente a esas fuentes. Por alguna
    razón, los creadores del programa SPICE hicieron para que la corriente sólo podía
    ser calculado <italic> mediante </italic> una fuente de tensión. Esta es una demanda
    algo molesto del programa de simulación SPICE. Con cada uno de estos <quote> tonto
    </quote>'}
? 'In summary, a parallel circuit is defined as one where all components are connected
  between the same set of electrically common points.  Another way of saying this
  is that all components are connected across each other''s terminals.  From this
  definition, three rules of parallel circuits follow: all components share the same
  voltage; resistances diminish to equal a smaller, total resistance; and branch currents
  add to equal a larger, total current.  Just as in the case of series circuits, all
  of these rules find root in the definition of a parallel circuit.  If you understand
  that definition fully, then the rules are nothing more than footnotes to the definition.

  '
: {tag: '<para>

    ', xlate: 'En resumen, un circuito en paralelo se define como uno en el que todos
    los componentes están conectados entre el mismo conjunto de puntos eléctricamente
    comunes. Otra forma de decir esto es que todos los componentes están conectados
    entre los terminales de cada uno. A partir de esta definición, tres reglas de
    circuitos paralelos siguen: todos los componentes comparten el mismo voltaje;
    resistencias disminuyen para igualar una resistencia más pequeña, el total; y
    corrientes de rama se suman a igualar una corriente mayor, total. Al igual que
    en el caso de circuitos en serie, todas estas reglas encontrar la raíz en la definición
    de un circuito paralelo. Si usted entiende que la definición totalmente, entonces
    las reglas no son más que notas al pie de la definición.'}
? 'In summary, a series circuit is defined as having only one path for electrons to
  flow.  From this definition, three rules of series circuits follow: all components
  share the same current; resistances add to equal a larger, total resistance; and
  voltage drops add to equal a larger, total voltage.  All of these rules find root
  in the definition of a series circuit.  If you understand that definition fully,
  then the rules are nothing more than footnotes to the definition.

  '
: {tag: '<para>

    ', xlate: 'En resumen, un circuito en serie se define como tener sólo un camino
    para que los electrones fluyan. A partir de esta definición, tres reglas de circuitos
    en serie siguen: todos los componentes comparten la misma corriente; resistencias
    añadir a igualar a, resistencia total más grande; y caídas de tensión se suman
    a ser igual a, tensión total más grande. Todas estas normas se encuentran raíces
    en la definición de un circuito en serie. Si usted entiende que la definición
    totalmente, entonces las reglas no son más que notas al pie de la definición.'}
? 'In the course of learning about electricity, you will want to construct your own
  circuits using resistors and batteries.  Some options are available in this matter
  of circuit assembly, some easier than others.  In this section, I will explore a
  couple of fabrication techniques that will not only help you build the circuits
  shown in this chapter, but also more advanced circuits.

  '
: {tag: '<para>

    ', xlate: 'En el curso de aprendizaje sobre la electricidad, tendrá que construir
    sus propios circuitos que utilizan resistencias y baterías. Algunas opciones están
    disponibles en este asunto de montaje del circuito, algunas más fáciles que otros.
    En esta sección, voy a explorar un par de técnicas de fabricación que no sólo
    le ayudará a construir los circuitos mostrados en este capítulo, sino también
    los circuitos más avanzados.'}
? 'In the following illustration, a single-battery, three-resistor circuit is shown
  constructed on a terminal strip:

  '
: {tag: '<para>

    ', xlate: 'En la siguiente ilustración, una sola batería, circuito de tres resistor
    está mostrado construida sobre una regleta de terminales:'}
? 'In this circuit, we have two loops for electrons to flow through: one from 6 to
  5 to 2 to 1 and back to 6 again, and another from 6 to 5 to 4 to 3 to 2 to 1 and
  back to 6 again.  Notice how both current paths go through R<subscript>1</subscript>
  (from point 2 to point 1).  In this configuration, we''d say that R<subscript>2</subscript>
  and R<subscript>3</subscript> are in parallel with each other, while R<subscript>1</subscript>
  is in series with the parallel combination of R<subscript>2</subscript> and R<subscript>3</subscript>.

  '
: {tag: '<para>

    ', xlate: 'En este circuito, tenemos dos bucles para que los electrones fluyen
    a través de: uno de 6 a 5 a 2 a 1 y de nuevo a 6 de nuevo, y otro de 6 a 5 a 4
    a 3 a 2 a 1 y de nuevo a 6 de nuevo. Observe cómo las dos vías de corriente pasan
    por R <subscript> 1 </subscript> (Desde el punto 2 al punto 1). En esta configuración,
    diríamos que R <subscript> 2 </subscript> y R <subscript> 3 </subscript> se encuentran
    en paralelo entre sí, mientras que R <subscript> 1 </subscript> está en serie
    con la combinación en paralelo de R <subscript> 2 </subscript> y R <subscript>
    3 </subscript> .'}
Jumper wires with <quote>alligator</quote>: {tag: '<para>

    ', xlate: cables de puente con <quote> caimán </quote>}
? 'Just as in the case of series circuits, the same caveat for Ohm''s Law applies:
  values for voltage, current, and resistance must be in the same context in order
  for the calculations to work correctly.  However, in the above example circuit,
  we can immediately apply Ohm''s Law to each resistor to find its current because
  we know the voltage across each resistor (9 volts) and the resistance of each resistor:

  '
: {tag: '<para>

    ', xlate: 'Al igual que en el caso de circuitos en serie, la misma advertencia
    para la Ley de Ohm se aplica: los valores de tensión, corriente y resistencia
    deben estar en el mismo contexto a fin de que los cálculos para que funcione correctamente.
    Sin embargo, en el circuito de ejemplo anterior, podemos aplicar de inmediato
    la ley de Ohm a cada resistencia para encontrar su actual porque sabemos que el
    voltaje a través de cada resistencia (9 voltios) y la resistencia de cada resistencia:'}
? 'Just as with the series circuit, we can use computer analysis to double-check our
  calculations.  First, of course, we have to describe our example circuit to the
  computer in terms it can understand.  I''ll start by re-drawing the circuit:

  '
: {tag: '<para>

    ', xlate: 'Al igual que con el circuito en serie, podemos utilizar el análisis
    informático volver a verificar nuestros cálculos. En primer lugar, por supuesto,
    tenemos que describir nuestra circuito de ejemplo para el equipo en términos que
    pueda entender. Voy a empezar por volver a dibujar el circuito:'}
? Just for fun, we can use a computer to analyze this very same circuit automatically.  It
  will be a good way to verify our calculations and also become more familiar with
  computer analysis.  First, we have to describe the circuit to the computer in a
  format recognizable by the software.  The SPICE program we'll be using requires
  that all electrically unique points in a circuit be numbered, and component placement
  is understood by which of those numbered points, or <quote>nodes,</quote>
: {tag: '<para>

    ', xlate: 'Sólo por diversión, podemos utilizar una computadora para analizar
    este mismo circuito automáticamente. Será una buena manera de verificar nuestros
    cálculos y también familiarizarse más con el análisis por ordenador. En primer
    lugar, tenemos que describir el circuito de la computadora en un formato reconocible
    por el software. El programa SPICE que va a utilizar requiere que todos los puntos
    eléctricamente únicos en un circuito de estar numeradas, y colocación de los componentes
    se entiende por el cual de esos puntos numerados, o <quote> linfáticos, </quote>'}
? 'Knowing that current is equal through all components of a series circuit (and we
  just determined the current through the battery), we can go back to our original
  circuit schematic and note the current through each component:

  '
: {tag: '<para>

    ', xlate: 'Sabiendo que la corriente es igual a través de todos los componentes
    de un circuito en serie (y sólo determinó la corriente a través de la batería),
    podemos volver a nuestro circuito original esquemática y tenga en cuenta la corriente
    a través de cada componente:'}
? 'Let''s start with a parallel circuit consisting of three resistors and a single
  battery:

  '
: {tag: '<para>

    ', xlate: 'Vamos a empezar con un circuito paralelo que consta de tres resistencias
    y una batería sola:'}
? 'Let''s start with a series circuit consisting of three resistors and a single battery:

  '
: {tag: '<para>

    ', xlate: 'Vamos a empezar con un circuito en serie que consta de tres resistencias
    y una batería sola:'}
? 'Let''s start with a simple series circuit:

  '
: {tag: '<para>

    ', xlate: !!python/unicode 'Vamos a empezar con un circuito en serie sencilla:'}
'Mathematically, conductance equals the reciprocal of resistance: G = 1/R': {tag: <item>,
  xlate: 'Matemáticamente, la conductancia es igual a la recíproca de la resistencia:
    G = 1 / R'}
? 'Mathematically, conductance is the reciprocal, or inverse, of resistance:

  '
: {tag: '<para>

    ', xlate: 'Matemáticamente, la conductancia es la inversa, o inversa, de la resistencia:'}
? 'Next, trace the wire connection from one side of the battery to the first component
  in the schematic, securing a connecting wire between the same two points on the
  real circuit.  I find it helpful to over-draw the schematic''s wire with another
  line to indicate what connections I''ve made in real life:

  '
: {tag: '<para>

    ', xlate: 'A continuación, rastrear la conexión del cable de un lado de la batería
    al primer componente en el esquema, asegurar un cable de conexión entre los mismos
    dos puntos en el circuito real. Me resulta muy útil a la sobre-dibujar el alambre
    del esquema con otra línea para indicar qué conexiones que he hecho en la vida
    real:'}
? Not only does the <quote>table</quote> method simplify the management of all relevant
  quantities, it also facilitates cross-checking of answers by making it easy to solve
  for the original unknown variables through other methods, or by working backwards
  to solve for the initially given values from your solutions.  For example, if you
  have just solved for all unknown voltages, currents, and resistances in a circuit,
  you can check your work by adding a row at the bottom for power calculations on
  each resistor, seeing whether or not all the individual power values add up to the
  total power.  If not, then you must have made a mistake somewhere!  While this technique
  of <quote>cross-checking</quote>
: {tag: '<para>

    ', xlate: 'No sólo el <quote> mesa </quote> método de simplificar la gestión de
    todas las magnitudes relevantes, sino que también facilita la comprobación cruzada
    de respuestas por lo que es fácil de resolver para las variables desconocidas
    originales a través de otros métodos, o trabajando hacia atrás para despejar los
    valores inicialmente que aparezca en sus soluciones. Por ejemplo, si sólo se han
    resuelto para todos los desconocidos tensiones, corrientes y resistencias en un
    circuito, se puede comprobar su trabajo mediante la adición de una fila en la
    parte inferior para calcular la potencia de cada resistencia, ya sea o no todos
    los valores de potencia individuales se suman hasta la potencia total. Si no es
    así, entonces usted debe haber cometido un error en alguna parte! Si bien esta
    técnica de <quote> comprobación cruzada </quote>'}
? "Notice that in this parallel circuit, an open branch only affects the current through\
  \ that branch and the circuit's total current.  Total voltage -- being shared equally\
  \ across all components in a parallel circuit, will be the same for all resistors.\
  \  Due to the fact that the voltage source's tendency is to hold voltage <italic>constant</italic>,\
  \ its voltage will not change, and being in parallel with all the resistors, it\
  \ will hold all the resistors' voltages the same as they were before: 9 volts. \
  \ Being that voltage is the only common parameter in a parallel circuit, and the\
  \ other resistors haven't changed resistance value, their respective branch currents\
  \ remain unchanged.  \n"
: {tag: '<para>

    ', xlate: 'Observe que en este circuito paralelo, una rama abierta sólo afecta
    a la corriente a través de la rama y la corriente total del circuito. Tensión
    total - se comparte por igual entre todos los componentes en un circuito paralelo,
    será el mismo para todas las resistencias. Debido al hecho de que la tendencia
    de la fuente de tensión es mantener la tensión <italic> constante </italic> ,
    Su voltaje no va a cambiar, y estar en paralelo con todas las resistencias, que
    llevará a cabo todas las resistencias tensiones de la misma como estaban antes:
    9 voltios. Siendo que el voltaje es el único parámetro común en un circuito en
    paralelo, y las otras resistencias no han cambiado valor de la resistencia, sus
    respectivas corrientes de las ramas permanecen sin cambios.'}
? 'Notice the voltage drops across each resistor, and how the sum of the voltage drops
  (1.5 + 5 + 2.5) is equal to the battery (supply) voltage: 9 volts.  This is the
  third principle of series circuits: that the supply voltage is equal to the sum
  of the individual voltage drops.

  '
: {tag: '<para>

    ', xlate: 'Observe el voltaje cae a través de cada resistor, y cómo la suma de
    las caídas de tensión (1,5 + 5 + 2.5) es igual a la batería (suministro) Tensión:
    9 voltios. Este es el tercer principio de circuitos en serie: que la tensión de
    alimentación es igual a la suma de las gotas individuales de tensión.'}
? Now let us suppose that R<subscript>2</subscript> fails shorted.  <italic>Shorted</italic>
  means that the resistor now acts like a straight piece of wire, with little or no
  resistance.  The circuit will behave as though a <quote>jumper</quote> wire were
  connected across R<subscript>2</subscript> (in case you were wondering, <quote>jumper
  wire</quote>
: {tag: '<para>

    ', xlate: 'Ahora supongamos que R <subscript> 2 </subscript> falla en cortocircuito.
    <italic> en corto </italic> significa que la resistencia de ahora actúa como una
    pieza recta de alambre, con poca o ninguna resistencia. El circuito se comportará
    como si una <quote> saltador </quote> alambre se conecta a través de R <subscript>
    2 </subscript> (Por si te lo preguntabas, <quote> cable pasa corriente </quote>'}
? 'Now that we know the amount of current through each resistor, we can use Ohm''s
  Law to determine the voltage drop across each one (applying Ohm''s Law in its proper
  context):

  '
: {tag: '<para>

    ', xlate: 'Ahora que sabemos la cantidad de corriente a través de cada resistencia,
    podemos utilizar la ley de Ohm para determinar la caída de tensión a través de
    cada uno (aplicando la ley de Ohm en su contexto adecuado):'}
? 'Now we have all the necessary information to calculate circuit current, because
  we have the voltage between points 1 and 4 (9 volts) and the resistance between
  points 1 and 4 (18 k<OMEGA>):

  '
: {tag: '<para>

    ', xlate: 'Ahora tenemos toda la información necesaria para calcular la corriente
    de cortocircuito, ya que tenemos el voltaje entre los puntos 1 y 4 (9 voltios)
    y la resistencia entre los puntos 1 y 4 (18 k <OMEGA> ):'}
? 'Now, all I have to do is run the SPICE program to process the netlist and output
  the results:

  '
: {tag: '<para>

    ', xlate: !!python/unicode 'Ahora, todo lo que tengo que hacer es ejecutar el
    programa SPICE para procesar la lista de conexiones y la salida de los resultados:'}
? 'Now, let''s look at the other type of circuit, a parallel configuration:

  '
: {tag: '<para>

    ', xlate: 'Ahora, vamos a ver otro tipo de circuito, una configuración en paralelo:'}
Now, with a value for total resistance inserted into the rightmost (<quote>Total</quote>: {
  tag: '<para>

    ', xlate: !!python/unicode 'Ahora, con un valor para resistencia total inserta
    en el extremo derecho ( <quote> Total </quote>'}
On the other hand, if R<subscript>2</subscript> were to fail <quote>open</quote>: {
  tag: '<para>

    ', xlate: !!python/unicode 'Por otro lado, si R <subscript> 2 </subscript> se
    produjera un fallo <quote> abierto </quote>'}
? 'Once again we find that the original numbering scheme used to identify points in
  the circuit will have to be altered for the benefit of SPICE.  In SPICE, all electrically
  common points must share identical node numbers.  This is how SPICE knows what''s
  connected to what, and how.  In a simple parallel circuit, all points are electrically
  common in one of two sets of points.  For our example circuit, the wire connecting
  the tops of all the components will have one node number and the wire connecting
  the bottoms of the components will have the other.  Staying true to the convention
  of including zero as a node number, I choose the numbers 0 and 1:

  '
: {tag: '<para>

    ', xlate: 'Una vez más nos encontramos con que el esquema de numeración original
    utilizado para identificar puntos en el circuito tendrá que ser alterado en beneficio
    de SPICE. En SPICE, todos los puntos eléctricamente comunes deben compartir números
    de nodo idénticas. Así es como SPICE sabe lo que está conectado a qué y cómo.
    En un circuito en paralelo simple, todos los puntos son eléctricamente común en
    uno de los dos conjuntos de puntos. Para nuestro circuito de ejemplo, el cable
    que conecta las partes superiores de todos los componentes tendrá un número de
    nodo y el cable de conexión de las partes inferiores de los componentes tendrá
    el otro. Mantenerse fiel a la convención de incluyendo el cero como un número
    de nodo, elijo los números 0 y 1:'}
? One of the essential skills for anyone interested in electricity and electronics
  is to be able to <quote>translate</quote> a schematic diagram to a real circuit
  layout where the components may not be oriented the same way.  Schematic diagrams
  are usually drawn for maximum readability (excepting those few noteworthy examples
  sketched to create maximum confusion!), but practical circuit construction often
  demands a different component orientation.  Building simple circuits on terminal
  strips is one way to develop the spatial-reasoning skill of <quote>stretching</quote>
: {tag: '<para>

    ', xlate: 'Una de las habilidades esenciales para cualquier persona interesada
    en la electricidad y la electrónica es poder <quote> traducir </quote> un diagrama
    esquemático de un diseño de circuito real donde los componentes no pueden estar
    orientados de la misma manera. Diagramas esquemáticos suelen ser atraídos por
    la máxima legibilidad (con excepción de los pocos ejemplos notables esbozadas
    para crear la máxima confusión!), pero la construcción de circuitos práctica a
    menudo exige una orientación componente diferente. La construcción de circuitos
    simples en regletas de terminales es una manera de desarrollar la habilidad de
    razonamiento espacial <quote> extensión </quote>'}
? 'One of the most common mistakes made by beginning electronics students in their
  application of Ohm''s Laws is mixing the contexts of voltage, current, and resistance.  In
  other words, a student might mistakenly use a value for I through one resistor and
  the value for E across a set of interconnected resistors, thinking that they''ll
  arrive at the resistance of that one resistor.  Not so!  Remember this important
  rule: The variables used in Ohm''s Law equations must be <italic>common</italic>
  to the same two points in the circuit under consideration.  I cannot overemphasize
  this rule.  This is especially important in series-parallel combination circuits
  where nearby components may have different values for both voltage drop <italic>and</italic>
  current.

  '
: {tag: '<para>

    ', xlate: 'Uno de los errores más comunes cometidos por los estudiantes principiantes
    de la electrónica en su aplicación de la ley de Ohm es la mezcla de los contextos
    de tensión, corriente y resistencia. En otras palabras, un estudiante puede utilizar
    por error un valor de I a través de una resistencia y el valor de E a través de
    un conjunto de resistencias interconectadas, pensando que van a llegar a la resistencia
    de aquella resistencia. ¡No tan! Recuerde esta regla importante: Las variables
    utilizadas en las ecuaciones ley de Ohm deben estar <italic> común </italic> a
    los mismos dos puntos en el circuito bajo consideración. No puedo exagerar esta
    regla. Esto es especialmente importante en los circuitos de combinación en serie-paralelo
    donde los componentes cercanos pueden tener diferentes valores tanto para la caída
    de voltaje <italic> y </italic> corriente.'}
? 'Please note something very important here.  The total circuit resistance is only
  625 <OMEGA>: <italic>less</italic> than any one of the individual resistors.  In
  the series circuit, where the total resistance was the sum of the individual resistances,
  the total was bound to be <italic>greater</italic> than any one of the resistors
  individually.  Here in the parallel circuit, however, the opposite is true: we say
  that the individual resistances <italic>diminish</italic> rather than <italic>add</italic>
  to make the total.  This principle completes our triad of <quote>rules</quote>'
: {tag: '<para>

    ', xlate: 'Tenga en cuenta algo muy importante aquí. La resistencia total del
    circuito es solamente 625 <OMEGA> : <italic> Menos </italic> de una cualquiera
    de las resistencias individuales. En el circuito en serie, donde la resistencia
    total era la suma de las resistencias individuales, el total fue obligado a ser
    <italic> mayor </italic> de una cualquiera de las resistencias de forma individual.
    Aquí, en el circuito paralelo, sin embargo, es todo lo contrario: se dice que
    las resistencias individuales <italic> disminuir </italic> más bien que <italic>
    añadir </italic> para hacer que el total. Este principio completa nuestra tríada
    de <quote> reglas </quote>'}
Power calculations: {tag: <sectiontitle>, xlate: Los cálculos de energía}
? 'Power for any particular table column can be found by the appropriate Ohm''s Law
  equation (<italic>appropriate</italic> based on what figures are present for E,
  I, and R in that column).

  '
: {tag: '<para>

    ', xlate: 'Poder para cualquier columna de tabla en particular se puede encontrar
    ecuación de la Ley de Ohm apropiado ( <italic> apropiado </italic> en base a lo
    figuras están presentes para E, I, y R en que la columna).'}
? 'Power is additive in <italic>any</italic> configuration of resistive circuit: P<subscript>Total</subscript>
  = P<subscript>1</subscript> + P<subscript>2</subscript> + . . . P<subscript>n</subscript>'
: {tag: <item>, xlate: 'El poder es aditivo en <italic> alguna </italic> configuración
    del circuito resistivo: P <subscript> Total </subscript> = P <subscript> 1 </subscript>
    + P <subscript> 2 </subscript> +. . . PAG <subscript> norte </subscript>'}
? Production printed circuit boards have <italic>traces</italic> of copper laid down
  on the phenolic or fiberglass substrate material to form pre-engineered connection
  pathways which function as wires in a circuit.  An example of such a board is shown
  here, this unit actually a <quote>power supply</quote>
: {tag: '<para>

    ', xlate: 'tarjetas de circuitos impresos de producción tienen <italic> rastros
    </italic> de cobre previsto en el material de sustrato fenólico o de fibra de
    vidrio para formar las vías de conexión pre-ingeniería que funcionan como cables
    en un circuito. Aquí se muestra un ejemplo de una tabla de este tipo, esta unidad
    en realidad una <quote> fuente de alimentación </quote>'}
? 'Progressing from a nice, neat, schematic diagram to the real circuit -- especially
  when the resistors to be connected are physically arranged in a <italic>linear</italic>
  fashion on the terminal strip -- is not obvious to many, so I''ll outline the process
  step-by-step.  First, start with the clean schematic diagram and all components
  secured to the terminal strip, with no connecting wires:

  '
: {tag: '<para>

    ', xlate: 'Progresando desde un buen diagrama, ordenado, esquemática para el circuito
    real - especialmente cuando las resistencias a ser conectados están dispuestos
    físicamente en una <italic> lineal </italic> La moda en la regleta de terminales
    - no es evidente para muchos, así que voy a esbozar el proceso paso a paso. En
    primer lugar, comenzar con el diagrama esquemático limpio y todos los componentes
    fijados a la regleta de terminales, sin cables de conexión:'}
? Resistance, by definition, is the measure of <italic>friction</italic> a component
  presents to the flow of electrons through it.  Resistance is symbolized by the capital
  letter <quote>R</quote> and is measured in the unit of <quote>ohm.</quote>
: {tag: '<para>

    ', xlate: 'Resistencia, por definición, es la medida de <italic> fricción </italic>
    un componente presenta al flujo de electrones a través de él. La resistencia se
    simboliza por la letra mayúscula <quote> R </quote> y se mide en la unidad de
    <quote> ohm. </quote>'}
? 'Running the computer analysis, we get these results (I''ve annotated the printout
  with descriptive labels):

  '
: {tag: '<para>

    ', xlate: 'Ejecución del análisis por ordenador, obtenemos estos resultados (He
    anotada la impresión con etiquetas descriptivas):'}
SERIES AND PARALLEL CIRCUITS: {tag: <chaptertitle>, xlate: !!python/unicode 'Circuitos
    serie y paralelo'}
? 'Series and parallel resistor configurations have very different electrical properties.  We''ll
  explore the properties of each configuration in the sections to come.

  '
: {tag: '<para>

    ', xlate: Series y configuraciones de resistencias paralelas tienen diferentes
    propiedades eléctricas. Vamos a estudiar las propiedades de cada configuración
    en secciones por venir.}
Simple parallel circuits: {tag: <sectiontitle>, xlate: !!python/unicode 'circuitos
    paralelos simples'}
Simple series circuits: {tag: <sectiontitle>, xlate: !!python/unicode 'circuitos en
    serie simples'}
? 'Since points 1 and 2 are connected together with wire of negligible resistance,
  as are points 3 and 4, we can say that point 1 is electrically common to point 2,
  and that point 3 is electrically common to point 4.  Since we know we have 9 volts
  of electromotive force between points 1 and 4 (directly across the battery), and
  since point 2 is common to point 1 and point 3 common to point 4, we must also have
  9 volts between points 2 and 3 (directly across the resistor).  Therefore, we can
  apply Ohm''s Law (I = E/R) to the current through the resistor, because we know
  the voltage (E) across the resistor and the resistance (R) of that resistor.  All
  terms (E, I, R) apply to the same two points in the circuit, to that same resistor,
  so we can use the Ohm''s Law formula with no reservation.

  '
: {tag: '<para>

    ', xlate: 'Desde los puntos 1 y 2 están conectados entre sí con alambre de resistencia
    despreciable, como lo son los puntos 3 y 4, podemos decir que el punto 1 es eléctricamente
    común con el punto 2, y que el punto 3 es eléctricamente común al punto 4. Desde
    sabemos que tenemos 9 voltios de fuerza electromotriz entre los puntos 1 y 4 (directamente
    a través de la batería), y desde el punto 2 es común al punto 1 y el punto 3 común
    al punto 4, debemos también tenemos 9 voltios entre los puntos 2 y 3 (directamente
    a través del resistor ). Por lo tanto, podemos aplicar la ley de Ohm (I = E /
    R) a la corriente a través de la resistencia, porque sabemos que el voltaje (E)
    en la resistencia y la resistencia (R) de esa resistencia. Todos los términos
    (E, I, R) se aplican a los mismos dos puntos del circuito, a la misma resistencia,
    por lo que podemos utilizar la fórmula la Ley de Ohm sin reserva.'}
? 'So what can we do?  We know the voltage of the source (9 volts) applied across
  the series combination of R<subscript>1</subscript>, R<subscript>2</subscript>,
  and R<subscript>3</subscript>, and we know the resistances of each resistor, but
  since those quantities aren''t in the same context, we can''t use Ohm''s Law to
  determine the circuit current.  If only we knew what the <italic>total</italic>
  resistance was for the circuit: then we could calculate <italic>total</italic> current
  with our figure for <italic>total</italic> voltage (I=E/R).

  '
: {tag: '<para>

    ', xlate: 'Entonces, ¿qué podemos hacer? Sabemos que la tensión de la fuente (9
    voltios) aplicados a través de la combinación en serie de R <subscript> 1 </subscript>
    , R <subscript> 2 </subscript> Y R <subscript> 3 </subscript> , Y sabemos que
    las resistencias de cada resistencia, pero ya que estas cantidades no están en
    el mismo contexto, no podemos usar la ley de Ohm para determinar la corriente
    del circuito. Si supiéramos lo que el <italic> total </italic> resistencia fue
    para el circuito: entonces podríamos calcular <italic> total </italic> actual
    con nuestra cifra de <italic> total </italic> voltaje (I = E / R).'}
? 'So, we arrive at our cryptic resistance formula at last!  Conductance (G) is seldom
  used as a practical measurement, and so the above formula is a common one to see
  in the analysis of parallel circuits.

  '
: {tag: '<para>

    ', xlate: 'Así, llegamos a nuestra fórmula secreta resistencia al fin! Conductancia
    (G) se utiliza raramente como una medida práctica, y por lo que la fórmula anterior
    es común para ver en el análisis de circuitos en paralelo.'}
? 'Solving the above equation for total resistance (instead of the reciprocal of total
  resistance), we can invert (reciprocate) both sides of the equation:

  '
: {tag: '<para>

    ', xlate: 'Resolviendo la ecuación anterior para resistencia total (en lugar de
    la recíproca de la resistencia total), podemos invertir (corresponder) ambos lados
    de la ecuación:'}
? 'Suffice it to say, intentional direct short-circuits across the terminals of any
  voltage source is a bad idea.  Even if the resulting high current (heat, flashes,
  sparks) causes no harm to people nearby, the voltage source will likely sustain
  damage, unless it has been specifically designed to handle short-circuits, which
  most voltage sources are not.

  '
: {tag: '<para>

    ', xlate: 'Baste decir, intencionales cortocircuitos directos a través de los
    terminales de cualquier fuente de tensión es una mala idea. Incluso si la alta
    corriente resultante (calor, destellos, chispas) no causa ningún daño a las personas
    cercanas, la fuente de tensión es probable sufrir daños, a menos que haya sido
    diseñado específicamente para manejar los cortocircuitos, que la mayoría de las
    fuentes de tensión no son.'}
? 'Supposing that R<subscript>2</subscript> opens in this parallel circuit, here''s
  what the effects will be:

  '
: {tag: '<para>

    ', xlate: 'Suponiendo que R <subscript> 2 </subscript> se abre en este circuito
    en paralelo, esto es lo que serán los efectos:'}
The <quote>table</quote>: {tag: '<para>

    ', xlate: !!python/unicode 'los <quote> mesa </quote>'}
? The ability to intuitively determine what will happen to a circuit with any given
  component fault is a <italic>crucial</italic> skill for any electronics troubleshooter
  to develop.  The best way to learn is to experiment with circuit calculations and
  real-life circuits, paying close attention to what changes with a fault, what remains
  the same, and <italic>why</italic>!
: {tag: <item>, xlate: 'La capacidad de determinar intuitivamente qué va a pasar a
    un circuito con algún fallo de componente dado es una <italic> crucial </italic>
    habilidad para cualquier solucionador de problemas para desarrollar la electrónica.
    La mejor manera de aprender es experimentar con los cálculos de circuitos y circuitos
    de la vida real, prestando mucha atención a lo que cambia con un fallo, lo que
    sigue siendo el mismo, y <italic> por qué </italic> !'}
The basic idea of a <quote>parallel</quote>: {tag: '<para>

    ', xlate: La idea básica de una <quote> paralela </quote>}
The basic idea of a <quote>series</quote>: {tag: '<para>

    ', xlate: La idea básica de una <quote> serie </quote>}
The critical assumption in this <quote>perfect</quote>: {tag: '<para>

    ', xlate: !!python/unicode 'El supuesto fundamental en este <quote> Perfecto </quote>'}
? 'The defining characteristic of a parallel circuit is that all components are connected
  between the same set of electrically common points.  Looking at the schematic diagram,
  we see that points 1, 2, 3, and 4 are all electrically common.  So are points 8,
  7, 6, and 5.  Note that all resistors as well as the battery are connected between
  these two sets of points.

  '
: {tag: '<para>

    ', xlate: 'La característica definitoria de un circuito en paralelo es que todos
    los componentes están conectados entre el mismo conjunto de puntos eléctricamente
    comunes. Mirando el diagrama esquemático, vemos que los puntos 1, 2, 3, y 4 son
    todos eléctricamente común. También lo son los puntos 8, 7, 6 y 5. Tenga en cuenta
    que todas las resistencias, así como la batería están conectados entre estos dos
    conjuntos de puntos.'}
? 'The dummy voltage sources are all set at 0 volts so as to have no impact on the
  operation of the circuit.  The circuit description file, or <italic>netlist</italic>,
  looks like this:

  '
: {tag: '<para>

    ', xlate: 'Las fuentes de tensión son todos ficticios fijado en 0 voltios a fin
    de tener ningún impacto en el funcionamiento del circuito. El archivo de descripción
    del circuito, o <italic> lista de conexiones </italic> , Se ve como esto:'}
? 'The figure of 9 volts is a <italic>total</italic> quantity for the whole circuit,
  whereas the figures of 3k, 10k, and 5k <OMEGA> are <italic>individual</italic> quantities
  for individual resistors.  If we were to plug a figure for total voltage into an
  Ohm''s Law equation with a figure for individual resistance, the result would not
  relate accurately to any quantity in the real circuit.

  '
: {tag: '<para>

    ', xlate: 'La cifra de 9 voltios es una <italic> total </italic> cantidad para
    todo el circuito, mientras que las figuras de 3k, 10k, y 5k <OMEGA> son <italic>
    individual </italic> cantidades de las resistencias individuales. Si nos vamos
    a conectar una figura de tensión total en la ecuación la ley de Ohm con una figura
    para la resistencia individual, el resultado no se relacionaría con precisión
    a cualquier cantidad en el circuito real.'}
? 'The first principle to understand about parallel circuits is that the voltage is
  equal across all components in the circuit.  This is because there are only two
  sets of electrically common points in a parallel circuit, and voltage measured between
  sets of common points must always be the same at any given time.  Therefore, in
  the above circuit, the voltage across R<subscript>1</subscript> is equal to the
  voltage across R<subscript>2</subscript> which is equal to the voltage across R<subscript>3</subscript>
  which is equal to the voltage across the battery.  This equality of voltages can
  be represented in another table for our starting values:

  '
: {tag: '<para>

    ', xlate: 'El primer principio para entender acerca de los circuitos paralelos
    es que el voltaje es igual en todos los componentes del circuito. Esto se debe
    a que sólo hay dos conjuntos de puntos eléctricamente comunes en un circuito en
    paralelo, y el voltaje medido entre conjuntos de puntos comunes siempre debe ser
    el mismo en cualquier momento dado. Por lo tanto, en el circuito anterior, el
    voltaje a través de R <subscript> 1 </subscript> es igual a la tensión a través
    de R <subscript> 2 </subscript> que es igual a la tensión a través de R <subscript>
    3 </subscript> que es igual a la tensión a través de la batería. Esta igualdad
    de tensiones se puede representar en otra mesa para nuestros valores de partida:'}
? 'The first principle to understand about series circuits is that the amount of current
  is the same through any component in the circuit.  This is because there is only
  one path for electrons to flow in a series circuit, and because free electrons flow
  through conductors like marbles in a tube, the rate of flow (marble speed) at any
  point in the circuit (tube) at any specific point in time must be equal.

  '
: {tag: '<para>

    ', xlate: 'El primer principio que entender acerca de los circuitos en serie es
    que la cantidad de corriente es la misma a través de cualquiera de los componentes
    en el circuito. Esto se debe a que sólo hay un camino para que los electrones
    fluyan en un circuito en serie, y porque los electrones libres fluyen a través
    de conductores como canicas en un tubo, la velocidad de flujo (velocidad de mármol)
    en cualquier punto en el circuito (tubo) en cualquier específica punto en el tiempo
    debe ser igual.'}
? The greater the resistance, the less the conductance, and vice versa.  This should
  make intuitive sense, resistance and conductance being opposite ways to denote the
  same essential electrical property.  If two components' resistances are compared
  and it is found that component <quote>A</quote> has one-half the resistance of component
  <quote>B,</quote> then we could alternatively express this relationship by saying
  that component <quote>A</quote> is <italic>twice</italic> as conductive as component
  <quote>B.</quote>  If component <quote>A</quote> has but one-third the resistance
  of component <quote>B,</quote> then we could say it is <italic>three times</italic>
  more conductive than component <quote>B,</quote>
: {tag: '<para>

    ', xlate: 'Cuanto mayor sea la resistencia, menor es la conductancia, y viceversa.
    Esto debe tener sentido intuitivo, la resistencia y la conductancia siendo maneras
    opuestas para denotar la misma propiedad eléctrica esencial. Si resistencias dos
    componentes se comparan y se encuentra que el componente <quote> UN </quote> tiene
    la mitad de la resistencia del componente <quote> SEGUNDO, </quote> entonces podríamos
    expresar alternativamente, esta relación diciendo que el componente <quote> UN
    </quote> es <italic> dos veces </italic> como conductor como componente <quote>
    SEGUNDO. </quote> Si el componente <quote> UN </quote> tiene más que un tercio
    de la resistencia del componente <quote> SEGUNDO, </quote> entonces podríamos
    decir que es <italic> tres veces </italic> más conductor que el componente <quote>
    SEGUNDO, </quote>'}
The job of a technician frequently entails <quote>troubleshooting</quote>: {tag: '<para>

    ', xlate: El trabajo de un técnico implica con frecuencia <quote> solución de
    problemas </quote>}
? 'The rule with such a table is to apply Ohm''s Law only to the values within each
  vertical column.  For instance, E<subscript>R1</subscript> only with I<subscript>R1</subscript>
  and R<subscript>1</subscript>; E<subscript>R2</subscript> only with I<subscript>R2</subscript>
  and R<subscript>2</subscript>; etc.  You begin your analysis by filling in those
  elements of the table that are given to you from the beginning:

  '
: {tag: '<para>

    ', xlate: 'La regla con una tabla de este tipo es aplicar la ley de Ohm sólo a
    los valores dentro de cada columna vertical. Por ejemplo, E <subscript> R1 </subscript>
    Sólo con I <subscript> R1 </subscript> y R <subscript> 1 </subscript> ; mi <subscript>
    R2 </subscript> Sólo con I <subscript> R2 </subscript> y R <subscript> 2 </subscript>
    ; etc Usted comienza su análisis mediante la cumplimentación de los elementos
    de la tabla que se da a usted desde el principio:'}
? 'The same basic form of equation works for <italic>any</italic> number of resistors
  connected together in parallel, just add as many 1/R terms on the denominator of
  the fraction as needed to accommodate all parallel resistors in the circuit.

  '
: {tag: '<para>

    ', xlate: 'La misma forma básica de la ecuación funciona para <italic> alguna
    </italic> número de resistencias conectadas en paralelo, basta con añadir tantos
    términos 1 / R en el denominador de la fracción, según sea necesario para dar
    cabida a todas las resistencias en paralelo en el circuito.'}
Then, knowing that the current is shared equally by all components of a series circuit (another <quote>rule</quote>: {
  tag: '<para>

    ', xlate: !!python/unicode 'Entonces, sabiendo que la corriente se reparte por
    igual entre todos los componentes de un circuito en serie (otra <quote> regla
    </quote>'}
? 'There are two basic ways in which to connect more than two circuit components:
  <italic>series</italic> and <italic>parallel</italic>.  First, an example of a series
  circuit:

  '
: {tag: '<para>

    ', xlate: 'Existen dos formas básicas en las que conectar más de dos componentes
    del circuito: <italic> serie </italic> y <italic> paralela </italic> . En primer
    lugar, un ejemplo de un circuito en serie:'}
? 'These internal resistances, small as they may be, turn our simple parallel circuit
  into a series-parallel combination circuit.  Usually, the internal resistances of
  voltage sources are low enough that they can be safely ignored, but when high currents
  resulting from shorted components are encountered, their effects become very noticeable.  In
  this case, a shorted R<subscript>2</subscript> would result in almost all the voltage
  being dropped across the internal resistance of the battery, with almost no voltage
  left over for resistors R<subscript>1</subscript>, R<subscript>2</subscript>, and
  R<subscript>3</subscript>:

  '
: {tag: '<para>

    ', xlate: 'Estas resistencias internas, por pequeñas que sean, a su vez nuestro
    simple circuito paralelo en un circuito de combinación en serie-paralelo. Por
    lo general, las resistencias internas de las fuentes de tensión son suficientes
    de que pueden ser ignorados bajo, pero cuando se encuentran altas corrientes resultantes
    de los componentes en corto, sus efectos se hacen muy notable. En este caso, un
    cortocircuito R <subscript> 2 </subscript> resultaría en casi todo el voltaje
    que cae a través de la resistencia interna de la batería, con casi ninguna tensión
    de sobra para resistencias R <subscript> 1 </subscript> , R <subscript> 2 </subscript>
    Y R <subscript> 3 </subscript> :'}
? 'These values do indeed match those calculated through Ohm''s Law earlier: 0.9 mA
  for I<subscript>R1</subscript>, 4.5 mA for I<subscript>R2</subscript>, and 9 mA
  for I<subscript>R3</subscript>.  Being connected in parallel, of course, all resistors
  have the same voltage dropped across them (9 volts, same as the battery).

  '
: {tag: '<para>

    ', xlate: 'Estos valores efectivamente coinciden con los calculados mediante la
    Ley de Ohm anterior: 0,9 mA para I <subscript> R1 </subscript> , 4,5 mA para I
    <subscript> R2 </subscript> Y 9 mA para I <subscript> R3 </subscript> . Estar
    conectado en paralelo, por supuesto, todas las resistencias tienen la misma caída
    de tensión a través de ellos (9 voltios, lo mismo que la batería).'}
? 'This board appears copper-side-up: the side where all the soldering is done.  Each
  hole is ringed with a small layer of copper metal for bonding to the solder.  All
  holes are independent of each other on this particular board, unlike the holes on
  a solderless breadboard which are connected together in groups of five.  Printed
  circuit boards with the same 5-hole connection pattern as breadboards can be purchased
  and used for hobby circuit construction, though.

  '
: {tag: '<para>

    ', xlate: 'Esta placa de cobre aparece del lado plano: el lado donde se realiza
    toda la soldadura. Cada agujero está rodeada de una pequeña capa de metal de cobre
    para la unión a la soldadura. Todos los agujeros son independientes el uno del
    otro en este tablero particular, a diferencia de los orificios en un circuito
    sin soldadura, que están conectados juntos en grupos de cinco. tarjetas de circuitos
    impresos con el mismo patrón de conexión 5 hoyos, placas universales pueden ser
    adquiridos y utilizados para la construcción del circuito manía, sin embargo.'}
? 'This brings us to the second principle of series circuits: the total resistance
  of any series circuit is equal to the sum of the individual resistances.  This should
  make intuitive sense: the more resistors in series that the electrons must flow
  through, the more difficult it will be for those electrons to flow.  In the example
  problem, we had a 3 k<OMEGA>, 10 k<OMEGA>, and 5 k<OMEGA> resistor in series, giving
  us a total resistance of 18 k<OMEGA>:

  '
: {tag: '<para>

    ', xlate: 'Esto nos lleva al segundo principio de circuitos en serie: la resistencia
    total de cualquier circuito en serie es igual a la suma de las resistencias individuales.
    Esto debe tener sentido intuitivo: los más resistencias en serie que los electrones
    deben fluir a través, más difícil será para los electrones fluyan. En el problema
    de ejemplo, tuvimos un 3 k <OMEGA> , 10 k <OMEGA> Y 5 k <OMEGA> resistencia en
    serie, que nos da una resistencia total de 18 k <OMEGA> :'}
? 'This is easily managed by adding another row to our familiar table of voltages,
  currents, and resistances:

  '
: {tag: '<para>

    ', xlate: 'Esto se logró fácilmente añadiendo otra fila a nuestra mesa familiar
    de voltajes, corrientes y resistencias:'}
? 'This is just a preview of things to come.  Don''t worry!  We''ll explore all these
  circuit configurations in detail, one at a time!

  '
: {tag: '<para>

    ', xlate: 'Esto es sólo un adelanto de lo que vendrá. No se preocupe! Vamos a
    explorar todas estas configuraciones de circuito en detalle, uno a la vez!'}
? 'This is the second principle of parallel circuits: the total circuit current is
  equal to the sum of the individual branch currents.  Using this principle, we can
  fill in the I<subscript>T</subscript> spot on our table with the sum of I<subscript>R1</subscript>,
  I<subscript>R2</subscript>, and I<subscript>R3</subscript>:

  '
: {tag: '<para>

    ', xlate: !!python/unicode 'Este es el segundo principio de circuitos paralelos:
    la corriente total del circuito es igual a la suma de las corrientes de las ramas
    individuales. Utilizando este principio, podemos llenar en el I <subscript> T
    </subscript> lugar en nuestra mesa con la suma de I <subscript> R1 </subscript>
    , YO <subscript> R2 </subscript> , y yo <subscript> R3 </subscript> :'}
? 'This is what happens in a household lamp circuit: all lamps get their operating
  voltage from power wiring arranged in a parallel fashion.  Turning one lamp on and
  off (one branch in that parallel circuit closing and opening) doesn''t affect the
  operation of other lamps in the room, only the current in that one lamp (branch
  circuit) and the total current powering all the lamps in the room:

  '
: {tag: '<para>

    ', xlate: 'Esto es lo que sucede en un circuito de lámpara de uso doméstico: todas
    las lámparas obtienen su tensión de funcionamiento del cableado de alimentación
    dispuestos en forma paralela. Volviendo una lámpara de encendido y apagado (una
    rama en que el cierre circuito en paralelo y apertura) no afecta la operación
    de otras lámparas en la habitación, sólo la corriente en que una lámpara (circuito
    de derivación) y la corriente total de encender todas las lámparas en el cuarto:'}
? "This printout is telling us the battery voltage is 9 volts, and the voltage drops\
  \ across R<subscript>1</subscript>, R<subscript>2</subscript>, and R<subscript>3</subscript>\
  \ are 1.5 volts, 5 volts, and 2.5 volts, respectively.  Voltage drops across any\
  \ component in SPICE are referenced by the node numbers the component lies between,\
  \ so v(1,2) is referencing the voltage between nodes 1 and 2 in the circuit, which\
  \ are the points between which R<subscript>1</subscript> is located.  The order\
  \ of node numbers is important: when SPICE outputs a figure for v(1,2), it regards\
  \ the polarity the same way as if we were holding a voltmeter with the red test\
  \ lead on node 1 and the black test lead on node 2.  \n"
: {tag: '<para>

    ', xlate: 'Esta impresión nos está diciendo el voltaje de la batería es de 9 voltios,
    y las caídas de voltaje a través de R <subscript> 1 </subscript> , R <subscript>
    2 </subscript> Y R <subscript> 3 </subscript> son 1,5 voltios, 5 voltios, y 2,5
    voltios, respectivamente. Las caídas de tensión a través de cualquier componente
    en SPICE son referenciados por los números de nodo del componente se encuentra
    entre, por lo v (1,2) hace referencia a la tensión entre los nodos 1 y 2 en el
    circuito, que son los puntos entre los cuales R <subscript> 1 </subscript> se
    encuentra. El orden de números de nodo es importante: cuando SPICE emite una cifra
    para v (1,2), que se refiere a la polaridad de la misma manera como si se la celebración
    de un voltímetro con el cable rojo de prueba en el nodo 1 y el cable de prueba
    negro en el nodo 2.'}
? 'This technique, however, proves impractical for circuits much more complex than
  this, due to the awkwardness of the jumper wires and the physical fragility of their
  connections.  A more common method of temporary construction for the hobbyist is
  the <italic>solderless breadboard</italic>, a device made of plastic with hundreds
  of spring-loaded connection sockets joining the inserted ends of components and/or
  22-gauge solid wire pieces.  A photograph of a real breadboard is shown here, followed
  by an illustration showing a simple series circuit constructed on one:

  '
: {tag: '<para>

    ', xlate: 'Esta técnica, sin embargo, resulta poco práctico para los circuitos
    mucho más complejo que esto, debido a la incomodidad de los cables de puente y
    la fragilidad física de sus conexiones. Un método más común de construcción temporal
    para el aficionado es el <italic> protoboard sin soldadura </italic> , Un dispositivo
    hecho de plástico con cientos de tomas de conexión por resorte que unen los extremos
    insertados de componentes y / o piezas de alambre sólido 22 de calibre. Una fotografía
    de un tablero verdadero se muestra aquí, seguido por una ilustración que muestra
    un circuito en serie sencillo construido sobre uno:'}
This way, the schematic may be used as a <quote>map</quote>: {tag: '<para>

    ', xlate: !!python/unicode 'De esta manera, el esquema se puede usar como una
    <quote> mapa </quote>'}
? 'Thus, when a wire or component lead is inserted into a hole on the breadboard,
  there are four more holes in that column providing potential connection points to
  other wires and/or component leads.  The result is an extremely flexible platform
  for constructing temporary circuits.  For example, the three-resistor circuit just
  shown could also be built on a breadboard like this:

  '
: {tag: '<para>

    ', xlate: 'Por lo tanto, cuando se inserta un cable conductor o componente en
    un agujero en el tablero, hay cuatro agujeros más de esa columna que proporcionan
    potenciales puntos de conexión para otros cables y / o terminales de componentes.
    El resultado es una plataforma extremadamente flexible para el montaje de circuitos
    temporales. Por ejemplo, el circuito de tres resistencia solo se muestra también
    podría ser construido en un circuito como éste:'}
? 'To be more precise, the total conductance in a parallel circuit is equal to the
  sum of the individual conductances:

  '
: {tag: '<para>

    ', xlate: 'Para ser más precisos, la conductancia total en un circuito en paralelo
    es igual a la suma de las conductancias individuales:'}
? To determine what would happen in a circuit if a component fails, re-draw that circuit
  with the equivalent resistance of the failed component in place and re-calculate
  all values.
: {tag: <item>, xlate: 'Para determinar lo que sucedería en un circuito si falla un
    componente, volver a dibujar el circuito con la resistencia equivalente del componente
    que ha fallado en su lugar y volver a calcular todos los valores.'}
? 'Total current in a parallel circuit is equal to the sum of the individual branch
  currents: I<subscript>Total</subscript> = I<subscript>1</subscript> + I<subscript>2</subscript>
  + . . . I<subscript>n</subscript>.'
: {tag: <item>, xlate: !!python/unicode 'La corriente total en un circuito en paralelo
    es igual a la suma de las corrientes de las ramas individuales: I <subscript>
    Total </subscript> = I <subscript> 1 </subscript> + I <subscript> 2 </subscript>
    +. . . yo <subscript> norte </subscript> .'}
? 'Total parallel conductance is <italic>greater</italic> than any of the individual
  branch conductances because parallel resistors conduct better together than they
  would separately:

  '
: {tag: '<para>

    ', xlate: 'conductancia en paralelo total es <italic> mayor </italic> que cualquiera
    de las conductancias individuales de rama porque resistencias en paralelo realizan
    mejor juntos que lo harían por separado:'}
? 'Total parallel resistance is <italic>less</italic> than any one of the individual
  branch resistances because parallel resistors resist less together than they would
  separately:

  '
: {tag: '<para>

    ', xlate: 'resistencia en paralelo total es <italic> Menos </italic> de una cualquiera
    de las resistencias individuales de rama porque resistencias en paralelo resisten
    menos entre sí que lo harían por separado:'}
? 'Total resistance in a parallel circuit is <italic>less</italic> than any of the
  individual resistances: R<subscript>Total</subscript> = 1 / (1/R<subscript>1</subscript>
  + 1/R<subscript>2</subscript> + . . . 1/R<subscript>n</subscript>)'
: {tag: <item>, xlate: !!python/unicode 'La resistencia total en un circuito en paralelo
    es <italic> Menos </italic> que cualquiera de las resistencias individuales: R
    <subscript> Total </subscript> = 1 / (1 / R <subscript> 1 </subscript> + 1 / R
    <subscript> 2 </subscript> +. . . 1 / R <subscript> norte </subscript> )'}
? 'Total resistance in a series circuit is equal to the sum of the individual resistances:
  R<subscript>Total</subscript> = R<subscript>1</subscript> + R<subscript>2</subscript>
  + . . . R<subscript>n</subscript>'
: {tag: <item>, xlate: !!python/unicode 'La resistencia total en un circuito en serie
    es igual a la suma de las resistencias individuales: R <subscript> Total </subscript>
    = R <subscript> 1 </subscript> + R <subscript> 2 </subscript> +. . . R <subscript>
    norte </subscript>'}
? 'Total voltage in a series circuit is equal to the sum of the individual voltage
  drops: E<subscript>Total</subscript> = E<subscript>1</subscript> + E<subscript>2</subscript>
  + . . . E<subscript>n</subscript>'
: {tag: <item>, xlate: 'tensión total en un circuito en serie es igual a la suma de
    las caídas de tensión individuales: E <subscript> Total </subscript> E = <subscript>
    1 </subscript> + E <subscript> 2 </subscript> +. . . mi <subscript> norte </subscript>'}
? 'Typically in industry, all wires are labeled with number tags, and electrically
  common wires bear the same tag number, just as they do in a SPICE simulation.  In
  this case, we could label the wires 1 and 2:

  '
: {tag: '<para>

    ', xlate: 'Típicamente en la industria, todos los cables se etiquetan con etiquetas
    de número, y eléctricamente cables comunes llevan el mismo número de la etiqueta,
    tal como lo hacen en una simulación SPICE. En este caso, podríamos etiquetar los
    cables 1 y 2:'}
? 'Underneath each hole in the breadboard face is a metal spring clip, designed to
  grasp any inserted wire or component lead.  These metal spring clips are joined
  underneath the breadboard face, making connections between inserted leads.  The
  connection pattern joins every five holes along a vertical column (as shown with
  the long axis of the breadboard situated horizontally):

  '
: {tag: '<para>

    ', xlate: 'Debajo de cada orificio en la cara de tablero es un clip de resorte
    de metal, diseñado para captar cualquier cable insertado o componente de plomo.
    Estas pinzas de resorte de metal se unen por debajo de la cara de tablero, haciendo
    conexiones entre cables insertados. El patrón de conexión se une a cada cinco
    agujeros a lo largo de una columna vertical (como se muestra con el eje largo
    del tablero situado horizontalmente):'}
? 'We also have a display showing current (albeit with a negative value) at 0.5 milliamps,
  or 500 microamps.  So our mathematical analysis has been vindicated by the computer.  This
  figure appears as a negative number in the SPICE analysis, due to a quirk in the
  way SPICE handles current calculations.

  '
: {tag: '<para>

    ', xlate: 'También tenemos una pantalla que muestra la corriente (aunque con un
    valor negativo) en 0.5 miliamperios, o 500 microamperios. Por lo que nuestro análisis
    matemático ha sido reivindicado por el ordenador. Esta figura aparece como un
    número negativo en el análisis SPICE, debido a una peculiaridad en la forma SPICE
    trata los cálculos actuales.'}
? We can apply the same before/after analysis technique to parallel circuits as well.  First,
  we determine what a <quote>healthy</quote>
: {tag: '<para>

    ', xlate: 'Podemos aplicar la misma técnica de análisis antes / después en paralelo
    circuitos también. En primer lugar, se determina qué <quote> saludable </quote>'}
What are <quote>series</quote> and <quote>parallel</quote>: {tag: <sectiontitle>,
  xlate: Qué son <quote> serie </quote> y <quote> paralela </quote>}
? 'When calculating the power dissipation of resistive components, use any one of
  the three power equations to derive the answer from values of voltage, current,
  and/or resistance pertaining to each component:

  '
: {tag: '<para>

    ', xlate: 'Al calcular la disipación de potencia de componentes resistivos, utilizar
    uno cualquiera de los tres ecuaciones de poder derivar la respuesta de los valores
    de tensión, corriente, y / o resistencia pertenecientes a cada componente:'}
? When students first see the parallel resistance equation, the natural question to
  ask is, <quote>Where did <italic>that</italic> thing come from?</quote>
: {tag: '<para>

    ', xlate: 'Cuando los estudiantes se ven por primera vez la ecuación de resistencia
    en paralelo, la pregunta natural es, <quote> ¿De dónde <italic> ese </italic>
    Lo viene? </quote>'}
? "When using Ohm's Law to calculate a variable pertaining to a single component,\
  \ be sure the voltage you're referencing is solely across that single component\
  \ and the current you're referencing is solely through that single component and\
  \ the resistance you're referencing is solely for that single component.  Likewise,\
  \ when calculating a variable pertaining to a set of components in a circuit, be\
  \ sure that the voltage, current, and resistance values are specific to that complete\
  \ set of components only!  A good way to remember this is to pay close attention\
  \ to the <italic>two points</italic> terminating the component or set of components\
  \ being analyzed, making sure that the voltage in question is across those two points,\
  \ that the current in question is the electron flow from one of those points all\
  \ the way to the other point, that the resistance in question is the equivalent\
  \ of a single resistor between those two points, and that the power in question\
  \ is the total power dissipated by all components between those two points.  \n"
: {tag: '<para>

    ', xlate: 'Cuando se utiliza la ley de Ohm para calcular una variable perteneciente
    a un solo componente, asegúrese de que el voltaje que está haciendo referencia
    es exclusivamente a través de ese único componente y la corriente que está haciendo
    referencia es exclusivamente a través de ese único componente y la resistencia
    que está haciendo referencia es exclusivamente para que solo componente. Del mismo
    modo, cuando se calcula una variable relacionada con un conjunto de componentes
    en un circuito, asegúrese de que el voltaje, corriente y valores de resistencia
    son específicas de este sistema completo de componentes únicos! Una buena manera
    de recordar esto es prestar mucha atención a la <italic> dos puntos </italic>
    concluido el componente o conjunto de componentes que se está analizando, asegurándose
    de que la tensión en cuestión es a través de esos dos puntos, que la corriente
    en cuestión es el flujo de electrones de uno de esos puntos de todo el camino
    hasta el otro punto, que la resistencia en cuestión es el equivalente de una sola
    resistencia entre esos dos puntos, y que la potencia en cuestión es la potencia
    total disipada por todos los componentes entre esos dos puntos.'}
? Whereas the normal application of Ohm's Law and the rules of series and parallel
  circuits is performed with numerical quantities (<italic><quote>quantitative</quote>
: {tag: '<para>

    ', xlate: Considerando que la aplicación normal de la ley de Ohm y las reglas
    de circuitos en serie y en paralelo se realiza con cantidades numéricas ( <italic><quote>
    cuantitativo </quote>}
? 'With R<subscript>2</subscript> at infinite resistance and total resistance being
  the sum of all individual resistances in a series circuit, the total current decreases
  to zero.  With zero circuit current, there is no electron flow to produce voltage
  drops across R<subscript>1</subscript> or R<subscript>3</subscript>.  R<subscript>2</subscript>,
  on the other hand, will manifest the full supply voltage across its terminals.

  '
: {tag: '<para>

    ', xlate: 'Con R <subscript> 2 </subscript> en resistencia infinita y la resistencia
    total es la suma de todas las resistencias individuales en un circuito en serie,
    la corriente total disminuye a cero. Con corriente del circuito de cero, no hay
    flujo de electrones para producir caídas de tensión en R <subscript> 1 </subscript>
    o R <subscript> 3 </subscript> . R <subscript> 2 </subscript> , Por el contrario,
    se manifestará la tensión de alimentación completa a través de sus terminales.'}
? 'With R<subscript>2</subscript> shorted, either by a jumper wire or by an internal
  resistor failure, the total circuit resistance will <italic>decrease</italic>.  Since
  the voltage output by the battery is a constant (at least in our ideal simulation
  here), a decrease in total circuit resistance means that total circuit current <italic>must
  increase</italic>:

  '
: {tag: '<para>

    ', xlate: 'Con R <subscript> 2 </subscript> cortocircuito, ya sea por un cable
    de puente o por un fallo de la resistencia interna, la resistencia total del circuito
    se <italic> disminución </italic> . Desde la salida de voltaje por la batería
    es una constante (al menos en nuestra simulación ideales aquí), una disminución
    de la resistencia total del circuito significa que la corriente total del circuito
    <italic> debe aumentar </italic> :'}
? 'With all components in this circuit functioning at their proper values, we can
  mathematically determine all currents and voltage drops:

  '
: {tag: '<para>

    ', xlate: 'Con todos los componentes de este circuito funciona a sus valores adecuados,
    podemos determinar matemáticamente todas las corrientes y caídas de tensión:'}
? 'With the top sides of all resistors (as shown in the schematic) connected together,
  and to the battery''s positive (+) terminal, all we have to do now is connect the
  bottom sides together and to the other side of the battery:

  '
: {tag: '<para>

    ', xlate: 'Con los lados superiores de todas las resistencias (como se muestra
    en el esquema) conectados juntos, y al positivo de la batería (+) terminal, todo
    lo que tenemos que hacer ahora es conectar los lados inferiores entre sí y al
    otro lado de la batería:'}
