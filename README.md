# Learn to Fetch Data in Next.js 15 in Server & Client Components, Database Client, SWR & React Query

Vídeo: [https://youtu.be/OPET9XQBHUE](https://youtu.be/OPET9XQBHUE)

1. Fetching data in Server Components
2. Fetching data in Client Components
3. ORM or Database Client
4. Libraries SWR and ReactQuery

## [DOCUMENTAÇÃO TANKSTACK-QUERY](https://tanstack.com/query/latest/docs/framework/react/overview)

O estado do servidor:

- É persistido remotamente em um local que você pode não controlar ou possuir
- Requer APIs assíncronas para busca e atualização
- Implica propriedade compartilhada e pode ser alterado por outras pessoas sem o seu conhecimento
- Pode potencialmente se tornar "desatualizado" em seus aplicativos se você não for cuidadoso

Depois de entender a natureza do estado do servidor em seu aplicativo, ainda mais desafios surgirão à medida que você avança, por exemplo:

- Cache... (possivelmente a coisa mais difícil de fazer na programação)
- Desduplicação de várias solicitações para os mesmos dados em uma única solicitação
- Atualizando dados "desatualizados" em segundo plano
- Saber quando os dados estão "desatualizados"
- Refletir as atualizações dos dados o mais rápido possível
- Otimizações de desempenho, como paginação e carregamento lento de dados
- Gerenciando a memória e a coleta de lixo do estado do servidor
- Memorizando resultados de consulta com compartilhamento estrutural

o React Query provavelmente pode:

- Ajudá-lo a remover muitas linhas de código complicado e incompreendido do seu aplicativo e substituí-lo por apenas algumas linhas de lógica do React Query.
- Torne seu aplicativo mais fácil de manter e criar novos recursos sem se preocupar em conectar novas fontes de dados de estado do servidor
- Tenha um impacto direto em seus usuários finais, tornando seu aplicativo mais rápido e responsivo do que nunca.
- Potencialmente ajudá-lo a economizar largura de banda e aumentar o desempenho da memória