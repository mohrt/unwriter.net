var vm = new Vue({
  el: '#main',
  data: {
    projects: [
      {
        date: 'Sep 14, 2020',
        title: 'Bitfeed',
        desc: 'Bitfeed is like RSS, but for Bitcoin transactions.',
        image_url: 'https://bitfeed.org/bitfeed.png',
        url: 'https://bitfeed.org/',
        twitter_url: 'https://twitter.com/_unwriter/status/1305526684733628419'
      },
      {
        date: 'Sep 3, 2020',
        title: 'PowPress',
        desc: 'The "Push Web" engine, powered by Bitcoin.',
        image_url: 'https://docs.planaria.network/small.png',
        url: 'https://powpress.org/',
        twitter_url: 'https://twitter.com/_unwriter/status/1305526684733628419'
      },
      {
        date: 'Jul 13, 2020',
        title: 'PowPing',
        desc: 'A Social Bitcoin Network.',
        image_url: 'https://docs.planaria.network/small.png',
        url: 'https://powping.com/',
        twitter_url: ''
      },
      {
        date: 'Jun 25, 2020',
        title: 'Bitsim',
        desc: 'Bitcoin Simulator.',
        image_url: 'https://docs.planaria.network/small.png',
        url: 'https://bitsim.planaria.network/',
        twitter_url: 'https://twitter.com/_unwriter/status/1276179085572608002'
      },
      {
        date: 'Jun 2, 2020',
        title: 'TXT',
        desc: 'TXT: A Semantic Bitcoin Storage.',
        image_url: 'https://docs.planaria.network/small.png',
        url: 'https://txt.network/',
        twitter_url: 'https://twitter.com/_unwriter/status/1267835442629693441'
      },
      {
        date: 'May 28, 2020',
        title: 'C.TXT',
        desc: 'Find files on Bitcoin.',
        image_url: 'https://docs.planaria.network/small.png',
        url: 'https://c.planaria.network/',
        twitter_url: 'https://twitter.com/_unwriter/status/1266006705936183297'
      },
      {
        date: 'May 26, 2020',
        title: 'BitPic TXT',
        desc: 'BitPic search engine and transaction explorer.',
        image_url: 'https://docs.planaria.network/small.png',
        url: 'https://txt.bitpic.network/',
        twitter_url: 'https://twitter.com/_unwriter/status/1204409714898923520'
      },
      {
        date: 'Apr 30, 2020',
        title: 'Bob and Neon Genesis Bitbus',
        desc: 'BOB endpoint for Bitbus.',
        image_url: 'https://docs.planaria.network/small.png',
        url: 'https://bob.bitbus.network/',
        twitter_url: 'https://twitter.com/_unwriter/status/1255533327706136578'
      },
      {
        date: 'Apr 16, 2020',
        title: 'Minercraft',
        desc: 'Interact with Bitcoin miner APIs.',
        image_url: 'https://minercraft.network/MINERCRAFT.png',
        url: 'https://minercraft.network/',
        twitter_url: 'https://twitter.com/_unwriter/status/1250778522228002816'
      },
      {
        date: 'Apr 8, 2020',
        title: 'Toychain',
        desc: 'Distributed version control system for Bitcoin.',
        image_url: 'https://toychain.network/toychain.png',
        url: 'https://toychain.network/',
        twitter_url: 'https://twitter.com/_unwriter/status/1247524238853955591'
      },
      {
        date: 'Mar 10, 2020',
        title: 'Bitbus 2.0',
        desc: 'The Bitcoin crawler API for everyone.',
        image_url: 'https://bitbus.network/bitbus.png',
        url: 'https://bitbus.network/',
        twitter_url: 'https://twitter.com/_unwriter/status/1237410630262456320'
      },
      {
        date: 'Feb 11, 2020',
        title: 'BitFS',
        desc: 'The Bitcoin file system.',
        image_url: 'https://docs.planaria.network/small.png',
        url: 'https://bitfs.network/',
        twitter_url: 'https://twitter.com/_unwriter/status/1227279423382130693'
      },
      {
        date: 'Jan 14, 2020',
        title: 'Bitsocket 2.0',
        desc: 'A production grade global Bitcoin push notification API service.',
        image_url: 'https://docs.planaria.network/small.png',
        url: 'https://bitsocket.org/',
        twitter_url: 'https://twitter.com/_unwriter/status/1217115204137431041'
      },
      {
        date: 'Dec 16, 2019',
        title: 'Localchain',
        desc: 'Dead simple offchain Bitcoin transaction ledger.',
        image_url: 'https://localchain.planaria.network/localchain.png',
        url: 'https://localchain/planaria.network/',
        twitter_url: 'https://twitter.com/_unwriter/status/1206581486247432193'
      },
      {
        date: 'Dec 12, 2019',
        title: 'Neon Bitpic',
        desc: 'Deploy your own Bitpic node.',
        image_url: 'https://docs.planaria.network/small.png',
        url: 'https://github.com/interplanaria/neonbitpic',
        twitter_url: 'https://twitter.com/_unwriter/status/1205158608784240640'
      },
      {
        date: 'Nov 12, 2019',
        title: 'Bitkey',
        desc: 'Paymail/pubkey mapping on-chain.',
        image_url: 'https://docs.planaria.network/small.png',
        url: 'https://bitkey.network/',
        twitter_url: 'https://twitter.com/_unwriter/status/1194276380676149249'
      },
      {
        date: 'Oct 28, 2019',
        title: 'su',
        desc: 'Simple authentication protocol for Bitcoin apps.',
        image_url: 'https://docs.planaria.network/small.png',
        url: 'https://su.planaria.network/',
        twitter_url: 'https://twitter.com/_unwriter/status/1188811124474556417'
      },
      {
        date: 'Sep 24, 2019',
        title: 'Overpool',
        desc: 'A decentralized turing-complete ledger of off-chain Bitcoin transactions.',
        image_url: 'https://overpool.network/overpool.png',
        url: 'https://overpool.network/',
        twitter_url: 'https://twitter.com/_unwriter/status/1176485037405089792'
      },
      {
        date: 'Sep 19, 2019',
        title: 'GridPlanaria',
        desc: 'Distributed Bitcoin data grid.',
        image_url: 'https://grid.planaria.network/_grid.png',
        url: 'https://grid.planaria.network/',
        twitter_url: 'https://twitter.com/_unwriter/status/1174702849000955905'
      },
      {
        date: 'Aug 30, 2019',
        title: 'MOM',
        desc: 'Metanet Object Model.',
        image_url: 'https://docs.planaria.network/small.png',
        url: 'https://mom.planaria.network/',
        twitter_url: 'https://twitter.com/_unwriter/status/1167447542147235840'
      },
      {
        date: 'Aug 7, 2019',
        title: 'BOB',
        desc: 'Bitoin OP_RETURN Bytecode.',
        image_url: 'https://docs.planaria.network/small.png',
        url: 'https://bob.planaria.network/',
        twitter_url: 'https://twitter.com/_unwriter/status/1159115175431196673'
      },
      {
        date: 'July 9, 2019',
        title: 'Eventchain',
        desc: 'An append-only log for capturing filtered Bitcoin events.',
        image_url: 'https://e.planaria.network/eventchain.png',
        url: 'https://e.planaria.network/',
        twitter_url: 'https://twitter.com/_unwriter/status/1148597387876884480'
      },
      {
        date: 'Jun 26, 2019',
        title: 'Metagraph',
        desc: 'Metanet graph explorer.',
        image_url: 'https://docs.planaria.network/small.png',
        url: 'https://metagraph.planaria.network/',
        twitter_url: 'https://twitter.com/_unwriter/status/1143888537982570496'
      },
      {
        date: 'Jun 13, 2019',
        title: 'Neon Planaria',
        desc: 'Bitcoin as a backend.',
        image_url: 'https://docs.planaria.network/small.png',
        url: 'https://neon.planaria.network/',
        twitter_url: 'https://twitter.com/_unwriter/status/1139201613623697410'
      },
      {
        date: 'Jun 5, 2019',
        title: 'Bitbus',
        desc: 'Bitcoinless Bitcoin computing.',
        image_url: 'https://bitbus.network/bitbus.png',
        url: 'https://bitbus.network/',
        twitter_url: 'https://twitter.com/_unwriter/status/1140690660519010309'
      },
      {
        date: 'Apr 17, 2019',
        title: 'Bterm',
        desc: 'A global terminal for Bitcoin application protocols.',
        image_url: 'https://docs.planaria.network/small.png',
        url: 'https://bterm.network/',
        twitter_url: 'https://twitter.com/_unwriter/status/1118488993241468928'
      },
      {
        date: 'Apr 9, 2019',
        title: 'Bit://',
        desc: 'A Bitcoin protocol protocol.',
        image_url: 'https://docs.planaria.network/small.png',
        url: 'https://bit.planaria.network/',
        twitter_url: 'https://twitter.com/_unwriter/status/1115631975308648448'
      },
      {
        date: 'Mar 21, 2019',
        title: 'Bottle',
        desc: 'A Bitcoin browser.',
        image_url: 'https://bottle.bitdb.network/bottle2.png',
        url: 'https://bottle.bitdb.network/',
        twitter_url: 'https://twitter.com/_unwriter/status/1108761025388728320'
      },
      {
        date: 'Mar 11, 2019',
        title: 'C://',
        desc: 'Universal content addressable file system over Bitcoin.',
        image_url: 'https://docs.planaria.network/small.png',
        url: 'https://c.bitdb.network/',
        twitter_url: 'https://twitter.com/_unwriter/status/1105127946950463488'
      },
      {
        date: 'Mar 6, 2019',
        title: 'Bitgraph',
        desc: 'Bitcoin graph explorer.',
        image_url: 'https://docs.planaria.network/small.png',
        url: 'https://bitgraph.network/',
        twitter_url: 'https://twitter.com/_unwriter/status/1103349743151996928'
      },
      {
        date: 'Feb 27, 2019',
        title: 'Planaria File Server API',
        desc: 'Build an autonomous HTTP file server over Bitcoin.',
        image_url: 'https://docs.planaria.network/small.png',
        url: 'https://medium.com/@_unwriter/planaria-file-serve-api-30f8ea4865ef',
        twitter_url: 'https://twitter.com/_unwriter/status/1100800757996183556'
      },
      {
        date: 'Feb 26, 2019',
        title: 'Bitstagram',
        desc: 'Bitcoin native photo app.',
        image_url: 'https://docs.planaria.network/small.png',
        url: 'https://bitstagram.bitdb.network/',
        twitter_url: 'https://twitter.com/_unwriter/status/1100434522213105665'
      },
      {
        date: 'Feb 22, 2019',
        title: 'BASCIIAT',
        desc: 'Store images as ASCII art on Bitcoin.',
        image_url: 'https://docs.planaria.network/small.png',
        url: 'https://basciiat.bitdb.network/',
        twitter_url: 'https://twitter.com/_unwriter/status/1098972886465941506'
      },
      {
        date: 'Feb 20, 2019',
        title: 'Euler',
        desc: 'Planaria machine indexing entire Bitcoin SV blockchain as a graph.',
        image_url: 'https://docs.planaria.network/small.png',
        url: 'https://euler.bitdb.network/',
        twitter_url: 'https://twitter.com/_unwriter/status/1098250371770863618'
      },
      {
        date: 'Jan 28, 2019',
        title: 'B://',
        desc: 'A Bitcoin simple storage and URI protocol.',
        image_url: 'https://docs.planaria.network/small.png',
        url: 'https://b.bitdb.network/',
        twitter_url: 'https://twitter.com/_unwriter/status/1089878690861891584'
      },
      {
        date: 'Jan 25, 2019',
        title: 'Bitcom',
        desc: 'Bitcoin application protocol computer.',
        image_url: 'https://bitcom.bitdb.network/icon.png',
        url: 'https://bitcom.bitdb.network/',
        twitter_url: 'https://twitter.com/_unwriter/status/1088854456773550086'
      },
      {
        date: 'Jan 23, 2019',
        title: 'Alice in Bitcoinland',
        desc: 'Worlds first serverless website in single Bitcoin transaction.',
        image_url: 'https://alice.bitdb.network/alice.jpg',
        url: 'http://alice.bitdb.network/',
        twitter_url: 'https://twitter.com/_unwriter/status/1088090041107312640'
      },
      {
        date: 'Jan 22, 2019',
        title: 'Bitchat terminal edition',
        desc: 'Bitchat in a terminal.',
        image_url: 'https://docs.planaria.network/small.png',
        url: 'http://bitchat.bitdb.network/',
        twitter_url: 'https://twitter.com/_unwriter/status/1087720520945160193'
      },
      {
        date: 'Jan 22, 2019',
        title: 'Bitpipe',
        desc: 'Bitcoin transaction microservice.',
        image_url: 'https://docs.planaria.network/small.png',
        url: 'https://github.com/unwriter/bitpipe#2-light-node',
        twitter_url: 'https://twitter.com/_unwriter/status/1087720516495003648'
      },
      {
        date: 'Jan 19, 2019',
        title: 'Bitchat',
        desc: 'Massive multiplayer global realtime chat over Bitcoin.',
        image_url: 'https://docs.planaria.network/small.png',
        url: 'http://bitchat.bitdb.network/',
        twitter_url: 'https://twitter.com/_unwriter/status/1086608512996773890'
      },
      {
        date: 'Jan 18, 2019',
        title: 'Bitsocket',
        desc: 'Programmable Bitcoin Push API.',
        image_url: 'https://bitsocket.org/bitsocket.png',
        url: 'http://bitsocket.org/',
        twitter_url: 'https://twitter.com/_unwriter/status/1086299718395854849'
      },
      {
        date: 'Jan 17, 2019',
        title: 'BitDB Meta',
        desc: 'BitDB for querying block metadata.',
        image_url: 'https://docs.planaria.network/small.png',
        url: 'http://meta.bitdb.org/',
        twitter_url: 'https://twitter.com/_unwriter/status/1085923999987703808'
      },
      {
        date: 'Jan 16, 2019',
        title: 'Chronos',
        desc: 'Ephemeral BitDB for dealing with time.',
        image_url: 'https://docs.planaria.network/small.png',
        url: 'http://chronos.bitdb.org/',
        twitter_url: 'https://twitter.com/_unwriter/status/1085687191857229826'
      },
      {
        date: 'Jan 2, 2019',
        title: 'Datapay',
        desc: 'The simplest javascript lib to write data to the Bitcoin SV blockchain.',
        image_url: 'https://docs.planaria.network/small.png',
        url: 'https://github.com/unwriter/datapay',
        twitter_url: 'https://twitter.com/_unwriter/status/1080543047123959809'
      },
    ]
  }
})