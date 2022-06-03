import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Rede Social - Encontros no Senac</Text>
      <Text>Você tem um projeto integrador?</Text>
      <Text>Quer envolver novas áreas? </Text>
      <Text>Então... vamos encontrar os alunos aqui?! ;)</Text>   
      <FlatList
      data={pessoas}
      renderItem={({item})=>
      <View>
          <Text>{item.nome}</Text>
          <Text>{item.curso}</Text>
          <Text>{item.periodo}</Text>
      </View>
      }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
    bio: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry Lorem Ipsum is simply dummy.',
    
  },
  {
    uid:420,
    nome:'Caio elias',
    curso:'Tecnico de informatica',
    periodo:'Manhã',
    turma:'TI10m',
    gosto:'Hardware,Banco de dados,C#',
    bio:'garoto de programa junior',
   
    },
    {
      uid:159,
      nome:'Cauãzinho chavão',
      curso: 'Técnico de Informática',
      periodo: 'Manhã',
      turma: 'Ti10',
      gosto:'Livia, hosana, laura, Mol e casadas', 
      bio:'Hardware,,REDES,fazendo programa nois é só o basico, preto lindo, famoso e rico',
      
    },
    {
      uid:69,
      nome:'sasuke',
      curso:'ninja',
      periodo:'manhã',
      turma:'ti12',
      gosto:'sofrer',
      bio:'matar um certo alguem é meu sonho',
      
    },
    {
      uid:159,
      nome:'Danilo Soares',
      curso: 'Técnico de Informática',
      periodo: 'Manhã',
      turma: 'Ti10',
      gosto:'Hardware,Front-end,Redes,PHP', 
      bio:'Curta a vida de um gento bem leve, gosto de ficar com meus amigos no final de semana e compartilhar informações é o meu forte. Sou paciênte.',
      
    },
];


