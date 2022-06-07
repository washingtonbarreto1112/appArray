import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Allan_700Bold, Lusitana_400Regular, Jost_700Bold_Italic } from '@expo-google-fonts/dev';

export default function App() {

  let [fontsLoaded] = useFonts({
    Allan_700Bold,
    Lusitana_400Regular,
    Jost_700Bold_Italic
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
  return (
    <View style={estilo.container}>
      <StatusBar style="auto" />
      <Text style={estilo.titulo1}>Rede Social - Encontros no Senac</Text>
      <Text style={estilo.titulo2}>Você tem um projeto integrador?</Text>
      <Text style={estilo.titulo2}>Quer envolver novas áreas? </Text>
      <Text style={estilo.titulo3}>Então... vamos encontrar os alunos aqui?! ;)</Text>   
      <FlatList
      data={pessoas}
      renderItem={({item})=>
      <View>
          <Text>{item.nome}</Text>
          <Text>{item.curso}</Text>
          <Text>{item.periodo}</Text>
          <Image style={estilo.Img} source={item.Img}/>
      </View>
      }
      />
    </View>
  );
}
}
const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 70
  },
  Img:{
    width: 200,
    height:200,
    borderRadius: 20,
    marginTop: 15
  },
  titulo1:{
      fontSize: 25,
      fontFamily: 'Allan_700Bold',
      marginTop: 10,
      marginVertical: 20
  },
  titulo2:{
    fontSize: 15,
    fontFamily: 'Lusitana_400Regular',
},
titulo3:{
  fontSize: 15,
  fontFamily: 'Jost_700Bold_Italic',
  marginVertical: 20
},

  
});


const pessoas = [
  {
    uid:10,
    nome:'Washington barreto',
    curso: 'Técnico de informática',
    periodo: 'Manhã',
    turma: 'Ti10',
    gosto: 'Hardware, Back-End, Redes, C#',
    bio: 'Lorem Ipsum is simply dummy text of the printing and setting industry. Lorem Ipsum has been the industry Lorem Ipsum is simply dummy.',
    Img: require('./assets/washington.jpg')
  },
  {
    uid:420,
    nome:'Caio elias',
    curso:'Tecnico de informatica',
    periodo:'Manhã',
    turma:'TI10m',
    gosto:'Hardware,Banco de dados,C#',
    bio:'garoto de programa junior',
    Img: require('./assets/caio.png')
    },
    {
      uid:159,
      nome:'Cauãzinho chavão',
      curso: 'Técnico de Informática',
      periodo: 'Manhã',
      turma: 'Ti10',
      gosto:'Livia, hosana, laura, Mol e casadas', 
      bio:'Hardware,,REDES,fazendo programa nois é só o basico, preto lindo, famoso e rico',
      Img: require('./assets/caua.png')
    },
    {
      uid:69,
      nome:'sasuke',
      curso:'ninja',
      periodo:'manhã',
      turma:'ti12',
      gosto:'sofrer',
      bio:'matar um certo alguem é meu sonho',
      Img: require('./assets/homemaranha.png')
    },
    {
      uid:159,
      nome:'Danilo Soares',
      curso: 'Técnico de Informática',
      periodo: 'Manhã',
      turma: 'Ti10',
      gosto:'Hardware,Front-end,Redes,PHP', 
      bio:'Curta a vida de um gento bem leve, gosto de ficar com meus amigos no final de semana e compartilhar informações é o meu forte. Sou paciênte.',
      Img: require('./assets/silvio.png')
    },
  ];


