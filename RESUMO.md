# Aula 1 - ilustra os benefícios do uso do React Native na construção de aplicativos nativos e mostra como configurar um ambiente de desenvolvedor eficiente.

## Introdução
* A abordagem "aprenda uma vez, escreva em qualquer lugar" ("learn once, write anywhere") do React Native nos permite usar os mesmos princípios que já conhecemos para desenvolver tanto para plataformas nativas como web. Afinal, por debaixo dos panos, muitos dos mesmos princípios do Virtual DOM, reconciliação, e algoritmos para realização de diffs se aplicam tanto para uma aplicação web construída com React como para uma aplicação móvel construída com React Native.

## Create React Native App

* Instalação (NPM ou Yarn)
  * `npm install -g create-react-native-app`
  * `yarn global add create-react-native-app`

* Expo
  * O Expo é um serviço que torna quase tudo que envolve o React Native bem mais fácil. A ideia por trás do Expo é não haver nenhuma necessidade de usar Android Studio ou Xcode. O melhor: ele ainda nos permite desenvolver para iOS com Windows (ou até mesmo Linux)!
    * `https:/expo.io/ (WEB)`
    * `Expo no Google Play (Android)`
    * `Expo na App Store (iOS)` 

* Simulador
  * Link `https://facebook.github.io/react-native/docs/getting-started.html`
  * Android Virtual Device: `npm run android`
  * iOS Simulator (macOS only): `npm run ios`

## Debugger
* O que é incrível no desenvolvimento com React Native é que podemos aproveitar o que estávamos acostumados a utilizar para o desenvolvimento web no desenvolvimento de app nativos. Acessar o menu de desenvolvedor no aplicativo permite que você recarregue seu código JavaScript, faça debug remotamente usando o Developer Tools e, inclusive, exiba um inspetor de código no próprio app. Para depurar bugs utilizando o Expo basta agitar seu telefone ou no código adicionar o debugger: `componetDidMount(){debugger}`
* Instalar
  * `yarn global add react-devtools`
  * `npm install -g react-devtools`
* Projeto
  * `react-devtools` (Console Debugger com Expo - Debug Remote JS)

<hr >

# Aula 2 - compara as principais diferenças conceituais e de API entre o React e o React Native.

## Web x Nativo
* Ao desenvolver projetos no React Native, tenha em mente que você está projetando uma experiência diferente daquela de aplicativos web. Aplicativos móveis têm uma aparência e usabilidade diferentes devido a diferenças fundamentais, tais como animações sutis que constroem um sentido de continuidade para os usuários. Existem diferenças entre o Android e o iOS, principalmente relacionadas a suas filosofias de design e navegação. Veremos alguns dos componentes fundamentais que compõem aplicativos de React Native na próxima seção.

## Componentes comuns do React Native
* `html - view` / `span - text`
* Usamos o componente <View> do React Native para construir a UI do aplicativo. Assim como os componentes <div>do HTML, o componente <View> pode acomodar várias props (por exemplo, style) e pode até ser aninhado dentro de outros componentes <View>!

## Icones
* O Create React Native App oferece suporte a milhares de ícones de vetor para uso em seus aplicativos. Fique à vontade de favoritar o vector icon directory, do Expo, e dar uma olhada nele para obter uma lista completa. Qualquer que seja o conjunto de ícones que você escolher, apenas certifique-se de que ele se encaixa na aparência geral de seu aplicativo (por exemplo, usar ícones específicos da plataforma).

## Style
* Aplicar estilo
```
<View style={style.container}>
...
</View>


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
```

## Touchables (sensíveis ao toque)
* Na maioria das vezes, os usuários interagem com aplicativos web usando cliques. No mundo dos aplicativos móveis, no entanto, vários gestos de toque diferentes são usados para navegar pelo aplicativo: tocar em uma tecla, arrastar para percorrer uma lista e assim por diante. O React Native oferece uma série de componentes para lidar com "gestos de toque", e eles são chamados de Touchables. Vamos vê-los em detalhes no vídeo abaixo:
* `<Button/>`
* `<TouchableHighlight/>` (iOS Android)
* `<TouchableNativeFeedback/>` (Android)
* `<TouchableOpacity/>` (iOS Android) ++
* `<TouchableWithoutFeedback/>` (iOS Android)
```
onClick === onPress
```
* Tanto os botões como os touchables nos permitem lidar com alguns gestos de toque de nossos aplicativos. A exibição dos botões é boa mesmo se eles não forem parte integrante do aplicativo, mas, você pode incorporar componentes como 'TouchableHighlight' ou 'TouchableOpacity' para dar um feedback mais refinado.

## Listas
* O React Native possui algumas maneiras de renderizar listas. Você provavelmente utilizará mais os componentes 
* `ScrollView` - Renderiza toda lista
* `FlatList` - Renderiza apenas os componentes que o usuário ve na tela `props = data && renderItem={this.renderItem}`).
```
 renderItem= ({item}) => {return <Review {...item} />}

 render() {
   const reviews = getReviews()

  return(
   <FlatList
      data={reviews}
      renderItem={this.renderItem} />
  )

 }
```
* `SectionList` - Para adicionar cabeçalhos de seção em uma lista o React Native oferece um outro componente de lista que renderiza esses cabeçalhos facilmente.

## Formulários
* Os formulários do React Native são como os formulários de React que você já conhece: o estado de elementos de input é controlado pelo componente de React que processa o formulário. Ou seja, valores de formulário são mantidos no estado do componente local, fazendo que o estado seja a "source of truth" daquele formulário.
* O React Native fornece alguns componentes básicos para uso nos formulários de seu aplicativo. Analisaremos melhor cada um deles no vídeo a seguir:
* `Switch` (Toggle, boolean)
* `TextInput` - Entrada de texto
* `KeyboardAvoidingView` - Passar no lugar da View - input desvia do teclado
* `<Slider/>` (iOS Android)
```
minimumValue={-10}
maximumValue={10}
value={this.state.value}
onChangeValue={(value) => this.setState(()=> ({value}))}
```
* `props`
```
* `onChange` -  onChange passa o objeto do evento inteiro como argumento
* `onChangeText` - onChangeText passa o valor atual (text)
* Enquanto que ambos os métodos são invocados na mudança de um valor,  como um argumento. Por outro lado, onChange passa o objeto do evento inteiro como argumento. Ambos são props perfeitamente válidos, mas a lógica do seu event handler precisará ser adaptada ao prop escolhido.
```
## Imagens
* `Image`
```
<Image style={style.img} source={require('./img.png')}/>
<Image style={style.img} source={{uri: 'https:img.com.br}}/>
```

## Outros componentes
* Acabamos de ver alguns dos mais importantes componentes do React Native. Esses componentes são uma base para você começar a usar as funcionalidades essenciais dos aplicativos que construir -- mas a lista de componentes disponíveis continua.
* `ActivityIndicator` (Spin - Loading)
* `Picker`
* `WebView`
* `Modal`
* Observe que certos componentes também são específicos de cada plataforma. Se quiser construir componentes em múltiplas plataformas com composição, reutilizando o máximo de código possível, pode fazer algum sentido alguns elementos serem diferentes, dependendo do público (ex.: iOS x Android).


## AsyncStorage
* AsyncStorage é um sistema de armazenamento simples, sem criptografia, assíncrono, persistente e fundamental, usado em todo o aplicativo. Ele deve ser usado em vez de LocalStorage.
* Local Storage: Para persistir dados em uma aplicação web, normalmente os armazenamos em algum tipo de banco de dados. Isso impede que dados do aplicativo sejam perdidos quando há atualizações de página. Usando localStorage, podemos obter um efeito semelhante para o usuário, armazenando esse dados diretamente em seu navegador. O melhor de tudo é que os dados armazenados em localStorage não têm nenhuma data de expiração. Isso significa que, mesmo se uma sessão for encerrada (por exemplo, a aba do navegador for fechada), dados não serão perdidos.
* Exemplo: Digamos que estamos construindo uma aplicação simples de React e Redux, que permite que os usuários criem e gerenciem uma lista de tarefas. A funcionalidade básica permite que os usuários adicionem, remova e marque itens como concluídos em sua lista de tarefas. Supondo que grande parte desta informação é mantida na store do aplicativo, como lidaríamos com a persistência de dados? Uma forma seria salvá-los em localStorage sempre que o estado for atualizado. Ou seja, o estado da store será salvo sempre que um dispatch for efetuado:
```
// store.js

import { createStore } from 'redux';
import Reducer from '../reducers/reducer';

const configureStore = () => {
  const store = createStore(Reducer);

  store.subscribe(() => {
    localStorage.state = JSON.stringify(store.getState());
  });

  return store;
};

export default configureStore;
```
* Depois que a store é criada, chamamos 'store.subscribe()' e passamos uma função de callback. O callback efetivamente salva uma string de JSON do estado da store em localStorage. Como resultado, cadastrando-se na store logo depois de criá-la, é possível salvar dados relacionados a todas as tarefas do usuário em seu navegador!
* A versão de localStorage no React Native é AsyncStorage. Convenientemente, como AsyncStorage é apenas uma abstração sobre os equivalentes de iOS e Android, não há nenhuma necessidade de considerar os diferentes ambientes.
Três principais métodos de AsyncStorage:
`setItem`
`removeItem`
`clearAll`

## Redux + React Native
* `yarn add redux react-redux`
*  Lembre-se que Redux é um recipiente de estado previsível para aplicações JavaScript. Ele pode ser usado com qualquer framework ou biblioteca front-end, portanto, podemos apenas usá-lo não apenas com React, mas também integrá-lo a aplicações React Native.

## Redux Steps
1.  Criar actions
2.  Criar reducers
3.  Criar store
4.  Envolver aplicação <Provide> (App.js)
5.  Conectar a store ao componente

## Redux + Actions
```
export const RECEIVE_ENTRIES = 'RECEIVE_ENTRIES'
export const ADD_ENTRY = 'ADD_ENTRY'

export function receiveEntries (entries) {
  return {
    type: RECEIVE_ENTRIES,
    entries,
  }
}

export function addEntry (entry) {
  return {
    type: ADD_ENTRY,
    entry,
  }
}
```

## Redux + Reducer + Provider
```

import React from 'react'
import { View } from 'react-native'
import AddEntry from './components/AddEntry'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View>
          <AddEntry />
        </View>
      </Provider>
    )
  }
}
```

## Redux + Connect
```
export default connect(
  mapStateToProps
)(AddEntry) 
```

<hr >

### Aula 3 - detalha os padrões de estilo e layout dos aplicativos React Native.

## HTML e CSS Normal
```
<!-- index.css -->
.avatar {
  border-radius: 5px;
  margin: 10px;
  width: 48px;
  height: 48px;
}

<!-- // index.html -->
<div>
  <img class='avatar' src='https://tylermcginnis.com/tylermcginnis_glasses-300.png' />
</div>
```

## HTML e CSS Reactive Native
É importante saber que todos os componentes do React Native podem aceitar uma prop chamada 'style'. Para prover estilos aos componentes com objetos JavaScript inline, podemos utilizar esta prop:
```
function Avatar ({ src }) {
  return (
    <View>
      <Image
        style={{borderRadius: 5, margin: 10, width: 48, height: 48}}
        source={{uri: 'https://tylermcginnis.com/tylermcginnis_glasses-300.png'}}
      />
    </View>
  );
}
```
* No exemplo acima, o componente <Image> recebe duas props: style e source. O valor de style é apenas um objeto JavaScript com as propriedades borderRadius, margin, width e height. Tenha em mente que, ao contrário de CSS na web, propriedades são escritas em camelCase (ou seja, borderRadius no CSS em JS, mas border-radius na web).
* Para aplicar o mesmo estilo em mais de um componente, mantendo o código sem repetição e reutilizável é indicado armazenar o objeto em uma variável:
```
const styles = {
  image: {
    borderRadius: 5,
    margin: 10,
    width: 48,
    height: 48
  }
};

function Avatar ({ src }) {
  return (
    <View>
      <Image
        style={styles.image}
        source={{uri: 'https://tylermcginnis.com/tylermcginnis_glasses-300.png'}}
      />
    </View>
  );
}
```

## StyleSheet
* É um objeto que contém os estilos é passado para o método create do StyleSheet. Parece semelhante à maneira de estilizar com uma variável JavaScript
```
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class TextExample extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.greenLarge}>This is large green text!</Text>
        <Text style={styles.red}>This is smaller red text!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  greenLarge: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 40
  },
  red: {
    color: 'red',
    padding: 30
  },
}); 
```
* Qualidade de código
  * Retirando os estilos da função render, você está tornando o código mais fácil de entender.
Nomear os estilos é uma boa maneira de adicionar significado aos componentes de baixo nível na função render.
* Desempenho
  * Fazer uma stylesheet usando um objeto de estilo torna possível referenciá-lo em vez de criar um novo objeto de estilo de cada vez.
Também permite enviar apenas uma vez o estilo através da ponte. Todos os usos subsequentes vão se referir a uma id (ainda não implementada).
* Outro benefício é que o StyleSheet valida o conteúdo dentro do objeto de estilo também. Isso significa que, se houver algum erro em alguma das propriedades ou valores de seus objetos de estilo, o console irá acusar um erro durante a compilação e não no tempo de execução.
* Se você quiser implementar mais de um estilo a um componente, a prop style pode aceitar estilos como uma array
```
<Text style={[styles.red, styles.greenLarge]}>This will be red, then greenLarge</Text>
```
* Além dos benefícios da qualidade do código, também existem benefícios em termos de desempenho. Fazer uma stylesheet por meio de um objeto de estilo torna possível referenciá-lo em vez de criar um novo objeto de estilo em cada render.
```
var styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  activeTitle: {
    color: 'red',
  },
});

<View style={styles.container}>
  <Text style={[styles.title, props.isActive && styles.activeTitle]} />
</View>
```

## Flexbox
* O objetivo do flexbox é criar uma maneira mais eficiente de "criar o layout, alinhar e distribuir o espaço entre os itens em um contêiner, mesmo quando seu tamanho é desconhecido e/ou dinâmico". Em poucas palavras, o flexbox se trata de criar layouts dinâmicos.
* A ideia principal do flexbox é que você dará ao elemento-pai a habilidade de controlar o layout de todos os seus elementos-filhos (imediatos!) em vez de ter cada elemento-filho controlando seu próprio layout. Quando você fizer isso, o pai torna-se um flex container, enquanto os filhos se tornam flex items. Um exemplo disso é que, em vez de fazer todos os elementos-filhos flutuarem para a esquerda e adicionar uma margem a cada um deles, você pode apenas dizer que seu elemento-pai terá todos os filhos em uma única linha com espaços entre eles. Então, a responsabilidade do layout dos elementos-filhos é transferida deles para o elemento-pai. Isso permite um controle mais detalhado do layout de seu aplicativo.
```
Flexbox Axes
Flex Direction
Justify Content
  Flex-Start
  Center
  Flex-End
  Space-Between
  Space-Around
Align Items
  Flex-Start
  Center
  Flex-End
  Stretch
Centralizando Conteúdo
A propriedade Flex
Alinhando itens individuais
```
* Código para teste
```
import React, { Component } from 'react'
import { StyleSheet, Text, View, AppRegistry } from 'react-native'

class FlexboxExamples extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box}/>
        <View style={styles.box}/>
        <View style={styles.box}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    height: 50,
    width: 50,
    backgroundColor: '#e76e63',
    margin: 10,
  }
})

export default FlexboxExamples;
```

## Flexbox Axes
* De longe, o conceito mais importante para se entender do flexbox é que ele trabalha com diferentes axes ou, em português, eixos. Você terá um Main Axis e um Cross Axis.
* No React Native, por padrão, o Main Axis é vertical, enquanto o Cross Axis é horizontal. Todos os outros conceitos do flexbox são baseados neste conceito de um Main Axis(|) e Cross Axis(-).

## Flexbox direction
* Note que eu deixei bem claro o termo "padrão" no que diz respeito ao Main Axis e ao Cross Axis. Isso é porque você pode alterar qual Axis é o Main e qual é o Cross. Isso nos leva à primeira propriedade do flexbox, flex-direction (ou flexDirection, no React Native).
* Dois valores: `row` e `column`(default)
```
flexDirection: 'row',
```

## Flexbox Justify content (Main Axis)
* Possui cinco valores diferentes que você pode utilizar para modificar como os elementos-filhos se alinham ao longo do Main Axis.
* `justifyContent: 'flex-start'` irá alinhar cada elemento-filho para o início do Main Axis.
* `justifyContent: 'center'` irá alinhar cada elemento-filho em direção ao centro do Main Axis. ​
* `justifyContent: 'flex-end'` irá alinhar cada elemento-filho em direção ao fim do Main Axis.
* `justifyContent: 'space-between'` irá alinhar cada filho para que o espaço entre eles seja o mesmo ao longo do Main Axis.
* `justifyContent: 'space-around'` irá alinhar cada elemento-filho para que haja o mesmo espaço em torno dos items ao longo do Main Axis. ​

## Flexbox Align Items (Cross Axis)
* Essa propriedade tem quatro valores diferentes que você pode usar para alterar como os elementos-filhos se alinham com relação ao Cross Axis.
* `alignItems: 'flex-start'` irá alinhar cada elemento-filho em direção ao início do Cross Axis. ​
* `alignItems: 'center'` alinhará cada elemento-filho em direção ao centro do Cross Axis.​
* `alignItems: 'flex-end'` alinhará cada elemento filho ao final do Cross Axis.
* `alignItems: 'stretch'` irá esticar cada elemento-filho ao longo do Cross Axis, contanto que o elemento-filho não tenha uma altura (flexDirection: row) ou largura (flexDirection: column) especificada. ​

## Flexbox Containers
* Até agora, só tínhamos um elemento flex contêiner ou pai. Cuidado para não confundir as coisas; se você criar uma estrutura mais aninhada de contêineres, a mesma lógica acima será verdadeira para os elementos-filhos (flex items), mas, em vez de relativos a toda a tela (como no nosso exemplo), eles se posicionarão de acordo com seu próprio componente-pai. Sua interface de usuário inteira será construída por meio de uma estrutura aninhada de flex containers.

## Flexbox %
* Você vai entender rapidamente que não existe estilo com percentagens em React Native. Apesar de eu concordar que dificulta um pouco as coisas, tudo o que você pode fazer com estilos que utilizam percentual, também pode fazer com o flexbox. Lembra a declaração flex: 1 que utilizamos nos exemplos acima? Essa é a propriedade que nos permite fazer isso. Curiosamente, não há implementação exata desse recurso no flexbox para a web, mas ela é similar ao flex-grow, caso saiba o que ela faz.
```
class FlexboxExamples extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.box, {flex: 1}]}/>
        <View style={[styles.box, {flex: 2}]}/>
        <View style={[styles.box, {flex: 1}]}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: '#e76e63',
    margin: 10,
  }
})

export default FlexboxExamples;
```
## Felxbox AlignSelf
* O elemento-filho sobrescreve o posicionamento especifico que recebeu do elemento-pai. Ele também tem exatamente as mesmas opções exatas que alignItems (flex-start, flex-end, center, stretch).
```
class FlexboxExamples extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box}/>
        <View style={[styles.box, {alignSelf: 'flex-end'}]}/>
        <View style={styles.box}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: '#e76e63',
    margin: 10,
  }
})

export default FlexboxExamples;
```
## Flexbox Layout
* O React Native implementa o flexbox para a construção de layouts, mas existem algumas diferenças-chave que devemos ter em mente enquanto desenvolvemos nossas aplicações. Primeiro, todos os contêineres em React Native são flex containers por padrão. Lembre-se que, no flexbox CSS tradicional , você normalmente definiria um contêiner flex. TUDO É `display: flex;`
* Outra distinção importante é como o React Native manipula flex-direction, uma propriedade que estabelece o eixo principal (isto é, define a direção na qual flex itens são colocados). Em aplicações web, o padrão é row. Mas, já que estamos trabalhando em dispositivos móveis, o React Native define o padrão como column, o que configura os items verticalmente.

## Flexbox + CSS
* Além do conteúdo acima, aqui está uma lista de padrões de outras propriedades comuns no CSS que o React Native aplica aos componentes.
`box-sizing: border-box`
`position: relative`
`align-items: stretch`
`flex-shrink: 0`
`align-content: flex-start`
`border: 0 solid black`
`margin: 0`
`padding: 0`
`min-width: 0`

## API da plataforma
* A abordagem do React para o desenvolvimento de aplicativos é "aprenda uma vez, escreva em qualquer lugar." O objetivo é usar os mesmos princípios, tecnologias e, no caso do React Native -- o mesmo código --, para desenvolver aplicativos. No entanto, pode haver casos em que faz sentido usar códigos distintos para cada plataforma móvel. Um exemplo seria caso quiséssemos unificar os estilos visuais dos componentes tanto para o iOS como para o Android. O React Native nos dá uma maneira conveniente de organizar o código de cada plataforma separadamente por meio da API `Platform`(Plataform.OS === 'ios' ? code ios : code android).

## API Dimensions 
* O React Native também vem com `Dimensions`, que permite que você selecione a largura e a altura da janela no dispositivo do usuário e também planeje a aparência do componente <View>.
```
import { Dimensions } from 'react-native';
```
Recuperar o tamanho da tela através do método get da API Dimensions:
```
const { width, height } = Dimensions.get('window');
```

## Media queries
* React Native (e especificamente a API StyleSheet) não tem suporte para media queries. Isso ocorre pois, para a maioria dos casos, você pode criar o design responsivo com flexbox que não necessitará da utilização de media queries. Nos casos raros em que o flexbox não atender às suas necessidades específicas, você pode utilizar a `API Dimensions`, que vimos anteriormente, para chegar aos mesmos resultados.

## Bibliotecas para CSS no JS
* Estão surgindo muita bibliotecas diferentes para trabalhar com estilos, e cada uma possui uma relação custo-benefício diferente.
* Duas das mais populares são a `Glamorous` e `Styled Components`.

## Styled Components
```
const Button = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred;

  ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}
`;

render(
  <div>
    <Button>Normal Button</Button>
    <Button primary>Primary Button</Button>
  </div>
);
```

<hr >

### Aula 4 - explica as estratégias e padrões de roteamento.

## React Navigation
* Instalar : `yarn add react-navigation`
* Componentes principais
`TabNavigator`
`StackNavigator`
`DrawerNavigator`

## TabNavigator (Views)
* Usando TabNavigator do React Navigator, os usuários podem navegar por diferentes telas dentro de um aplicativo simplesmente pressionando as abas que renderizam diferentes componentes. Digamos que temos dois componentes funcionais básicos que apenas renderizam algum texto, Hello e Goodbye:
```
// App.js
Import { TabNavigator } from 'react-navigation';

const Hello = () => (
  <View>
    <Text>Hello!</Text>
  </View>
);

const Goodbye = () => (
  <View>
    <Text>Goodbye!</Text>
  </View>
);

const Tabs = TabNavigator({
  Hello: {
    screen: Hello
  },
  Goodbye: {
    screen: Goodbye
  },
});

export default class App extends React.Component {
  render() {
    return (
      <Tabs />
    );
  }
}
```

## Status Bar
*  O React Native, fornece um simples componente StatusBar para personalizar a maneira como a barra de status aparece em um aplicativo(Barra superior onde aparece data/operadora,hora).
```
import { StatusBar } from 'react-native';
import { Constants } from 'expo'

function UdaciStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
          <UdaciStatusBar backgroundColor={purple} barStyle="light-content" />
          <Tabs />
        </View>
      </Provider>
    )
  }
}
```

## StackNavigator- (Pilha - Rotas)
*  Com o Stack Navigator, novas telas são adicionadas e removidas como uma pilha. Isso coloca telas em cima umas da outras, de maneira que "a última que entra é a primeira que sai", semelhante aos métodos push() e pop() de Array. O uso de StackNavigator é muito semelhante ao de TabNavigator. Mas, em vez de passar em um objeto de abas diferentes, podemos passar um objeto de telas diferentes, que devem estar disponíveis em toda essa pilha. Primeiro, vá em frente e faça a importação do StackNavigator a partir de react-navigation
```
// App.js
Import { StackNavigator } from 'react-navigation';

const Home = ({ navigation }) => (
  <View>
    <Text>This is the Home view</Text>
    <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
      <Text>Press here for the Dashboard</Text>
    </TouchableOpacity>
  </View>
);

const Dashboard = () => (
  <View>
    <Text>Este é o Dashboard</Text>
  </View>
);

const Stack = StackNavigator({
  Home: {
    screen: Home
  },
  Dashboard: {
    screen: Dashboard
  }
})


export default class App extends React.Component {
  render() {
    return (
      <Stack />
    );
  }
}
```
* return = navigation.goBack()

## DrawerNavigator
* O React Navigation oferece um navegador mais básico para criar navegações personalizáveis: o DrawerNavigator. Enquanto TabNavigator usa abas para ajudar os usuários a navegarem para telas específicas, DrawerNavigator usa um menu tipo gaveta que desliza da lateral da tela.
```
Import { DrawerNavigator } from 'react-navigation';

const Home = ({ navigation }) => (
  <View>
    <Text>This is the Home view</Text>
    <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}>
      <Text>Press here to open the drawer!</Text>
    </TouchableOpacity>
  </View>
);

const Dashboard = ({ navigation }) => (
  <View>
    <Text>This is the Dashboard view</Text>
    <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}>
      <Text>Press here to open the drawer!</Text>
    </TouchableOpacity>
  </View>
);

const Drawer = DrawerNavigator({
  Home: {
    screen: Home
  },
  Dashboard: {
    screen: Dashboard
  }
});

export default class App extends React.Component {
  render() {
    return (
      <Drawer/>
    );
  }
}
```

<hr >

### Aula 5 - introduz funcionalidade nativa (ex.: geolocalização, notificações, etc.) e a preparação de aplicativos para as app stores.

## Geolocalização
* Um recurso comum nos aplicativos nativos é ter a capacidade de acessar e obter atualizações sobre a localização atual do usuário. Como na maioria das coisas, o Expo torna isso bastante simples, dando-nos uma API JavaScript que funcionará em ambos, iOS e Android.
```
import { Location } from 'expo';
```
*  A propriedade Location nos dá ambas as opções, com getCurrentPositionAsync e watchPositionAsync
*  `getCurrentPositionAsync` obtém o local atual do dispositivo sem ficar olhando para as atualizações futuras. 
*  `watchPositionAsync` também receberá a localização atual do dispositivo, além de observar atualizações futuras. Dessa forma, você será notificado se o dispositivo mudar de localização.
*  Para solicitar a localização do usuário, use o método `Location.watchPositionAsync`, do Expo, que passa dois argumentos: um objeto options e um callback para ser chamado sempre que a localização mudar.

* Dicas de geolocalização
  * `Sempre que estiver lidando com um recurso que requer permissão do usuário para funcionar corretamente, é importante que você considere todas as diferentes opções de UI que podem ser mostradas. Por exemplo, ao lidar com a localização de um usuário, é importante que você considere três diferentes interfaces:`
    * O usuário dá permissão para exibir sua localização (esse caso é um bom exemplo).
    * O usuário decide não negar e nem conceder permissão para exibir sua localização
    * O usuário nega acesso à sua localização

## Permissions
```
askPermission = () => {
    Permissions.askAsync(Permissions.LOCATION)
      .then(({ status }) => {
        if (status === 'granted') {
          return this.setLocation()
        }

        this.setState(() => ({ status }))
      })
      .catch((error) => console.warn('error asking Location permission: ', error))
  }
```

## Animações
* Animações são um aspecto fundamental de qualquer aplicativo nativo. Devido a isso, React Native vem construído com uma biblioteca de animações chamada `Animated`.
* A ideia inteira do Animated é "se concentrar em relações declarativas entre entradas e saídas, com transformações configuráveis no meio e simples métodos de início/parada para controlar a animação com base no tempo de execução". Em outras palavras, o Animated permite estabelecer diferentes tipos de transformações nos valores específicos. Por exemplo, você poderia facilmente animar a propriedade opacity de uma imagem de 0 a 1, dando um efeito que faz com que a imagem vá aparecendo lentamente.
* `Decay ` -  começará com uma velocidade inicial gradualmente devagar para uma pausa,
* `Spring` - fornece um tipo de salto normal de animação (width, heigth)
* `timing` - anima um valor de um tempo especificado (opacity)

## Notificações locais
* Quando se lida com as notificações, é importante compreender que existem dois tipos diferentes: notificações push e notificações locais.
* As notificações locais não utilizam ou requerem qualquer infraestrutura externa; elas acontecem inteiramente no dispositivo em si. Isso significa que a única exigência para o dispositivo exibir a notificação é que ele esteja ligado. Por outro lado, as notificações push exigem que você tenha um servidor que as levam ao dispositivo do usuário quando um determinado evento ocorre.
* iOS `As notificações (ambas notificações push e locais) não aparecem no topo da tela automaticamente se a aplicação estiver em primeiro plano. Além disso, notificações push não funcionam no simulador iOS (com Expo sendo usado ou não).`
* Notificações locais - `scheduleLocalNotificationAsync` 

## Manipulação de fotos
* `ImagePicker` - Fornece acesso à UI do sistema para selecionar imagens da biblioteca de fotos do telefone ou tirar uma foto com a câmera.
* `ImagePicker.launchImageLibraryAsync` - método para iniciar a UI da galeria de imagens do dispositivo.

## Preparação para app store
* Quando você envia um aplicativo a uma loja, é preciso enviar informações, não apenas o aplicativo em si. Por exemplo, você precisa de detalhes como descrição, ícone, etc. Para nossa sorte, o Expo facilita especificar esse tipo de coisa apenas editando o arquivo app.json na raiz da pasta do aplicativo.
* Exemplo
```
{
  "expo": {
    "sdkVersion": "19.0.0",
    "orientation": "portrait",
    "name": "Udacifitness",
    "description": "The best triathlon training app in the world.",
    "slug": "udacifitness",
    "version": "1.0",
    "icon": "https://maxcdn.icons8.com/Color/PNG/512/Sports/triathlon-512.png",
    "notification": {
      "icon": "http://www.student-scholarships.com/images/made/img/featured/nav_basketball_45_45.png"
    },
    "ios": {
     "bundleIdentifier": "org.udacifitness.exp",
    },
    "android": {
     "package": "org.udacifitness.exp",
    }
  },
}
```

## .apk e .ipa
* Antes de enviar seu aplicativo a uma loja, é necessário "embalá-lo" de maneira adequada. A App Store do iOS pedirá por um . ipa ("pacote da App Store do iOS") e a Google Play Store, do Android, por um arquivo .apk* ("Android Application Package"). Ao criar um arquivo apk ou ipa, você está essencialmente criando um pacote com todas as informações de que qualquer App store precisa para processar e executar seu aplicativo.
* A maneira mais fácil de gerar tanto o arquivo .apk como o .ipa é usar o CLI exp, do Expo. Primeiro, execute npm install -g exp. Após sua instalação (e a configuração do arquivo app.json), você pode executar exp build:ios para construir seu arquivo .ipa, e exp build:android para construir seu arquivo apk.
* Observe que eles levarão de 10 a 20 minutos para serem construídos, então, você precisará ser paciente. Para verificar o status da buil , você pode executar exp build:status. Por fim, esse comando vai gerar uma URL onde você pode ir para baixar arquivos. ipa ou apk.