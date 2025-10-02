// 全国の名産品データ
const foodData = [
    // 北海道
    { name: "夕張メロン", prefecture: "北海道", category: "果物", season: "夏", lat: 43.0642, lng: 141.3469, description: "甘くて香り高い高級メロン。夕張市で栽培されるブランドメロンです。" },
    { name: "毛がに", prefecture: "北海道", category: "海産物", season: "冬", lat: 43.0642, lng: 141.3469, description: "北海道の冬の味覚の王様。身が詰まって甘みが強いカニです。" },
    { name: "じゃがいも", prefecture: "北海道", category: "野菜", season: "秋", lat: 43.0642, lng: 141.3469, description: "男爵いもやメークインなど、品種豊富な北海道のじゃがいも。" },
    { name: "ラーメン", prefecture: "北海道", category: "その他", season: "通年", lat: 43.0642, lng: 141.3469, description: "札幌、旭川、函館など、各地に独自のラーメン文化があります。" },
    
    // 青森県
    { name: "りんご", prefecture: "青森県", category: "果物", season: "秋", lat: 40.8244, lng: 140.7404, description: "世界一のりんご生産量を誇る青森のりんご。ふじ、つがるなど品種豊富。" },
    { name: "にんにく", prefecture: "青森県", category: "野菜", season: "夏", lat: 40.8244, lng: 140.7404, description: "青森県はにんにくの生産量日本一。香り高く、栄養価も豊富です。" },
    
    // 岩手県
    { name: "前沢牛", prefecture: "岩手県", category: "肉類", season: "通年", lat: 39.7036, lng: 141.1525, description: "奥州市前沢地区で生産される高級和牛。霜降りが美しく、とろけるような食感です。" },
    { name: "わかめ", prefecture: "岩手県", category: "海産物", season: "春", lat: 39.7036, lng: 141.1525, description: "三陸海岸で採れる新鮮なわかめ。歯ごたえが良く、磯の香りが豊かです。" },
    
    // 宮城県
    { name: "仙台牛", prefecture: "宮城県", category: "肉類", season: "通年", lat: 38.2682, lng: 140.8694, description: "宮城県産の高級和牛。きめ細かな霜降りと上品な味わいが特徴です。" },
    { name: "ずんだ餅", prefecture: "宮城県", category: "お菓子", season: "通年", lat: 38.2682, lng: 140.8694, description: "枝豆をすりつぶして作る宮城の伝統的な和菓子。甘さ控えめで上品な味です。" },
    
    // 秋田県
    { name: "きりたんぽ", prefecture: "秋田県", category: "その他", season: "通年", lat: 39.7186, lng: 140.1024, description: "つぶしたご飯を棒に巻きつけて焼いた秋田の郷土料理。鍋物や焼き物で楽しめます。" },
    { name: "比内鶏", prefecture: "秋田県", category: "肉類", season: "通年", lat: 39.7186, lng: 140.1024, description: "秋田県の在来種で、肉質が柔らかく甘みがある高級鶏肉です。" },
    
    // 山形県
    { name: "さくらんぼ", prefecture: "山形県", category: "果物", season: "夏", lat: 38.2404, lng: 140.3636, description: "佐藤錦をはじめ、高品質なさくらんぼの産地。甘くてジューシーです。" },
    { name: "米沢牛", prefecture: "山形県", category: "肉類", season: "通年", lat: 38.2404, lng: 140.3636, description: "山形県米沢市で生産される高級和牛。きめ細かな霜降りが特徴です。" },
    
    // 福島県
    { name: "もも", prefecture: "福島県", category: "果物", season: "夏", lat: 37.7503, lng: 140.4676, description: "甘くて香り高い福島の桃。白桃や黄桃など、品種が豊富です。" },
    { name: "会津地鶏", prefecture: "福島県", category: "肉類", season: "通年", lat: 37.7503, lng: 140.4676, description: "会津地方で飼育される地鶏。肉質が締まっており、うま味が豊富です。" },
    
    // 茨城県
    { name: "メロン", prefecture: "茨城県", category: "果物", season: "夏", lat: 36.3418, lng: 140.4468, description: "茨城県はメロンの生産量日本一。甘くて香り高い高品質なメロンです。" },
    { name: "レンコン", prefecture: "茨城県", category: "野菜", season: "冬", lat: 36.3418, lng: 140.4468, description: "土浦市を中心に栽培される茨城のレンコン。シャキシャキとした食感が特徴です。" },
    
    // 栃木県
    { name: "いちご", prefecture: "栃木県", category: "果物", season: "春", lat: 36.5658, lng: 139.8836, description: "とちおとめをはじめ、高品質ないちごの産地。甘くて香り高いです。" },
    { name: "かんぴょう", prefecture: "栃木県", category: "野菜", season: "通年", lat: 36.5658, lng: 139.8836, description: "栃木県はかんぴょうの生産量日本一。巻き寿司などに欠かせない食材です。" },
    
    // 群馬県
    { name: "こんにゃく", prefecture: "群馬県", category: "野菜", season: "通年", lat: 36.3907, lng: 139.0604, description: "群馬県はこんにゃくの生産量日本一。弾力があり、様々な料理に使えます。" },
    { name: "下仁田ねぎ", prefecture: "群馬県", category: "野菜", season: "冬", lat: 36.3907, lng: 139.0604, description: "太くて甘い下仁田ねぎ。鍋物や焼き物に最適です。" },
    
    // 埼玉県
    { name: "小松菜", prefecture: "埼玉県", category: "野菜", season: "冬", lat: 35.8571, lng: 139.6490, description: "江戸時代から栽培される埼玉の伝統野菜。栄養価が高く、クセがありません。" },
    { name: "狭山茶", prefecture: "埼玉県", category: "飲み物", season: "通年", lat: 35.8571, lng: 139.6490, description: "関東で唯一の茶産地。深い味わいと香りが特徴の煎茶です。" },
    
    // 千葉県
    { name: "落花生", prefecture: "千葉県", category: "野菜", season: "秋", lat: 35.6074, lng: 140.1065, description: "千葉県は落花生の生産量日本一。香ばしく、栄養価も豊富です。" },
    { name: "梨", prefecture: "千葉県", category: "果物", season: "秋", lat: 35.6074, lng: 140.1065, description: "二十世紀梨をはじめ、甘くてジューシーな梨の産地です。" },
    
    // 東京都
    { name: "江戸前寿司", prefecture: "東京都", category: "海産物", season: "通年", lat: 35.6762, lng: 139.6503, description: "東京湾で獲れた新鮮な魚介を使った江戸前の寿司。職人の技が光ります。" },
    { name: "深川めし", prefecture: "東京都", category: "その他", season: "通年", lat: 35.6762, lng: 139.6503, description: "あさりとねぎを使った東京の郷土料理。江戸時代から親しまれています。" },
    
    // 神奈川県
    { name: "湘南ゴールド", prefecture: "神奈川県", category: "果物", season: "冬", lat: 35.4478, lng: 139.6425, description: "神奈川県で開発された柑橘類。甘くて香り高く、冬の味覚です。" },
    { name: "箱根寄木細工", prefecture: "神奈川県", category: "その他", season: "通年", lat: 35.4478, lng: 139.6425, description: "箱根の伝統工芸品。美しい木目模様が特徴の工芸品です。" },
    
    // 新潟県
    { name: "コシヒカリ", prefecture: "新潟県", category: "米・穀物", season: "秋", lat: 37.9024, lng: 139.0232, description: "日本を代表するブランド米。粘りと甘みが特徴の高品質なお米です。" },
    { name: "笹だんご", prefecture: "新潟県", category: "お菓子", season: "通年", lat: 37.9024, lng: 139.0232, description: "笹の葉で包んだ新潟の伝統的な和菓子。上品な甘さが特徴です。" },
    
    // 富山県
    { name: "白エビ", prefecture: "富山県", category: "海産物", season: "春", lat: 36.6953, lng: 137.2113, description: "富山湾で獲れる高級エビ。甘くてプリプリとした食感が特徴です。" },
    { name: "ますの寿司", prefecture: "富山県", category: "海産物", season: "通年", lat: 36.6953, lng: 137.2113, description: "富山の郷土料理。酢でしめたますを使った押し寿司です。" },
    
    // 石川県
    { name: "加賀野菜", prefecture: "石川県", category: "野菜", season: "通年", lat: 36.5947, lng: 136.6256, description: "加賀地方で栽培される伝統野菜。加賀れんこん、加賀太きゅうりなどがあります。" },
    { name: "輪島塗", prefecture: "石川県", category: "その他", season: "通年", lat: 36.5947, lng: 136.6256, description: "石川県輪島市の伝統工芸品。美しい漆器として世界的に有名です。" },
    
    // 福井県
    { name: "越前がに", prefecture: "福井県", category: "海産物", season: "冬", lat: 36.0652, lng: 136.2216, description: "福井県の冬の味覚の王様。身が詰まって甘みが強いカニです。" },
    { name: "越前そば", prefecture: "福井県", category: "その他", season: "通年", lat: 36.0652, lng: 136.2216, description: "福井県の郷土料理。つなぎを使わない本格的なそばです。" },
    
    // 山梨県
    { name: "ぶどう", prefecture: "山梨県", category: "果物", season: "秋", lat: 35.6642, lng: 138.5683, description: "甲州ぶどうをはじめ、高品質なぶどうの産地。ワイン用ぶどうも栽培されています。" },
    { name: "もも", prefecture: "山梨県", category: "果物", season: "夏", lat: 35.6642, lng: 138.5683, description: "甘くて香り高い山梨の桃。白桃や黄桃など、品種が豊富です。" },
    
    // 長野県
    { name: "りんご", prefecture: "長野県", category: "果物", season: "秋", lat: 36.2048, lng: 138.2529, description: "青森に次ぐりんごの産地。ふじ、つがるなど、品種豊富で高品質です。" },
    { name: "信州そば", prefecture: "長野県", category: "その他", season: "通年", lat: 36.2048, lng: 138.2529, description: "長野県の郷土料理。つなぎを使わない本格的なそばです。" },
    
    // 岐阜県
    { name: "飛騨牛", prefecture: "岐阜県", category: "肉類", season: "通年", lat: 35.3912, lng: 136.7223, description: "岐阜県で生産される高級和牛。きめ細かな霜降りと上品な味わいが特徴です。" },
    { name: "高山ラーメン", prefecture: "岐阜県", category: "その他", season: "通年", lat: 35.3912, lng: 136.7223, description: "岐阜県高山市のご当地ラーメン。醤油ベースのあっさりとした味です。" },
    
    // 静岡県
    { name: "静岡茶", prefecture: "静岡県", category: "飲み物", season: "通年", lat: 34.9769, lng: 138.3831, description: "日本一の茶産地。深蒸し茶が有名で、香り高く味わい深いお茶です。" },
    { name: "みかん", prefecture: "静岡県", category: "果物", season: "冬", lat: 34.9769, lng: 138.3831, description: "甘くて香り高い静岡のみかん。温州みかんをはじめ、品種が豊富です。" },
    
    // 愛知県
    { name: "名古屋コーチン", prefecture: "愛知県", category: "肉類", season: "通年", lat: 35.1802, lng: 136.9066, description: "愛知県の在来種で、肉質が柔らかく甘みがある高級鶏肉です。" },
    { name: "味噌煮込みうどん", prefecture: "愛知県", category: "その他", season: "通年", lat: 35.1802, lng: 136.9066, description: "愛知県の郷土料理。濃い味噌で煮込んだうどんです。" },
    
    // 三重県
    { name: "松阪牛", prefecture: "三重県", category: "肉類", season: "通年", lat: 34.7303, lng: 136.5086, description: "三重県松阪市で生産される高級和牛。世界三大和牛の一つです。" },
    { name: "伊勢えび", prefecture: "三重県", category: "海産物", season: "通年", lat: 34.7303, lng: 136.5086, description: "伊勢湾で獲れる高級エビ。甘くてプリプリとした食感が特徴です。" },
    
    // 滋賀県
    { name: "近江牛", prefecture: "滋賀県", category: "肉類", season: "通年", lat: 35.0045, lng: 135.8683, description: "滋賀県で生産される高級和牛。きめ細かな霜降りが特徴です。" },
    { name: "鮒ずし", prefecture: "滋賀県", category: "海産物", season: "通年", lat: 35.0045, lng: 135.8683, description: "琵琶湖の鮒を使った滋賀の郷土料理。発酵食品としても有名です。" },
    
    // 京都府
    { name: "宇治茶", prefecture: "京都府", category: "飲み物", season: "通年", lat: 35.0116, lng: 135.7681, description: "京都府宇治市で生産される高級茶。抹茶や煎茶が有名です。" },
    { name: "京野菜", prefecture: "京都府", category: "野菜", season: "通年", lat: 35.0116, lng: 135.7681, description: "京都で栽培される伝統野菜。九条ねぎ、聖護院かぶらなどがあります。" },
    
    // 大阪府
    { name: "たこ焼き", prefecture: "大阪府", category: "その他", season: "通年", lat: 34.6863, lng: 135.5197, description: "大阪の代表的な郷土料理。丸い形のたこ入りお好み焼きです。" },
    { name: "うどん", prefecture: "大阪府", category: "その他", season: "通年", lat: 34.6863, lng: 135.5197, description: "大阪のうどん文化。きつねうどんやたぬきうどんが有名です。" },
    
    // 兵庫県
    { name: "神戸牛", prefecture: "兵庫県", category: "肉類", season: "通年", lat: 34.6901, lng: 135.1956, description: "兵庫県で生産される高級和牛。世界三大和牛の一つで、最高級の味わいです。" },
    { name: "明石だこ", prefecture: "兵庫県", category: "海産物", season: "通年", lat: 34.6901, lng: 135.1956, description: "明石海峡で獲れる高品質なタコ。身が締まって甘みがあります。" },
    
    // 奈良県
    { name: "柿の葉寿司", prefecture: "奈良県", category: "海産物", season: "通年", lat: 34.6851, lng: 135.8050, description: "奈良の郷土料理。柿の葉で包んだ押し寿司です。" },
    { name: "大和牛", prefecture: "奈良県", category: "肉類", season: "通年", lat: 34.6851, lng: 135.8050, description: "奈良県で生産される高級和牛。きめ細かな霜降りが特徴です。" },
    
    // 和歌山県
    { name: "みかん", prefecture: "和歌山県", category: "果物", season: "冬", lat: 34.2261, lng: 135.1675, description: "和歌山県はみかんの生産量日本一。甘くて香り高い温州みかんです。" },
    { name: "梅干し", prefecture: "和歌山県", category: "その他", season: "通年", lat: 34.2261, lng: 135.1675, description: "和歌山県は梅干しの生産量日本一。南高梅を使った高品質な梅干しです。" },
    
    // 鳥取県
    { name: "松葉がに", prefecture: "鳥取県", category: "海産物", season: "冬", lat: 35.5036, lng: 134.2381, description: "鳥取県の冬の味覚の王様。身が詰まって甘みが強いカニです。" },
    { name: "二十世紀梨", prefecture: "鳥取県", category: "果物", season: "秋", lat: 35.5036, lng: 134.2381, description: "鳥取県で開発された梨の品種。甘くてジューシーです。" },
    
    // 島根県
    { name: "出雲そば", prefecture: "島根県", category: "その他", season: "通年", lat: 35.4723, lng: 133.0505, description: "島根県の郷土料理。つなぎを使わない本格的なそばです。" },
    { name: "宍道湖しじみ", prefecture: "島根県", category: "海産物", season: "通年", lat: 35.4723, lng: 133.0505, description: "宍道湖で獲れる高品質なしじみ。味噌汁の具として最適です。" },
    
    // 岡山県
    { name: "マスカット", prefecture: "岡山県", category: "果物", season: "夏", lat: 34.6618, lng: 133.9350, description: "岡山県で開発された高級ぶどう。甘くて香り高く、贈答品としても人気です。" },
    { name: "白桃", prefecture: "岡山県", category: "果物", season: "夏", lat: 34.6618, lng: 133.9350, description: "岡山県は白桃の生産量日本一。甘くて香り高い高品質な桃です。" },
    
    // 広島県
    { name: "牡蠣", prefecture: "広島県", category: "海産物", season: "冬", lat: 34.3966, lng: 132.4596, description: "広島県は牡蠣の生産量日本一。身が大きく、うま味が豊富です。" },
    { name: "もみじ饅頭", prefecture: "広島県", category: "お菓子", season: "通年", lat: 34.3966, lng: 132.4596, description: "広島の代表的な和菓子。もみじの形をした可愛い饅頭です。" },
    
    // 山口県
    { name: "ふぐ", prefecture: "山口県", category: "海産物", season: "冬", lat: 34.1861, lng: 131.4705, description: "下関市はふぐの本場。高級魚として知られるふぐ料理が楽しめます。" },
    { name: "瓦そば", prefecture: "山口県", category: "その他", season: "通年", lat: 34.1861, lng: 131.4705, description: "山口県の郷土料理。瓦の上で焼いたそばです。" },
    
    // 徳島県
    { name: "すだち", prefecture: "徳島県", category: "果物", season: "秋", lat: 34.0658, lng: 134.5593, description: "徳島県はすだちの生産量日本一。香り高く、料理のアクセントに最適です。" },
    { name: "阿波尾鶏", prefecture: "徳島県", category: "肉類", season: "通年", lat: 34.0658, lng: 134.5593, description: "徳島県の在来種で、肉質が柔らかく甘みがある高級鶏肉です。" },
    
    // 香川県
    { name: "讃岐うどん", prefecture: "香川県", category: "その他", season: "通年", lat: 34.3403, lng: 134.0433, description: "香川県の郷土料理。コシが強く、つるつるとした食感のうどんです。" },
    { name: "オリーブ", prefecture: "香川県", category: "その他", season: "秋", lat: 34.3403, lng: 134.0433, description: "香川県小豆島は日本で最初にオリーブ栽培が始まった地。高品質なオリーブオイルが生産されています。" },
    
    // 愛媛県
    { name: "みかん", prefecture: "愛媛県", category: "果物", season: "冬", lat: 33.8416, lng: 132.7660, description: "愛媛県はみかんの生産量日本一。甘くて香り高い温州みかんです。" },
    { name: "じゃこ天", prefecture: "愛媛県", category: "海産物", season: "通年", lat: 33.8416, lng: 132.7660, description: "愛媛県の郷土料理。じゃこ（小魚）をすり身にして揚げた料理です。" },
    
    // 高知県
    { name: "かつお", prefecture: "高知県", category: "海産物", season: "春", lat: 33.5597, lng: 133.5311, description: "高知県はかつおの水揚げ量日本一。新鮮なかつおのたたきが有名です。" },
    { name: "ゆず", prefecture: "高知県", category: "果物", season: "冬", lat: 33.5597, lng: 133.5311, description: "高知県はゆずの生産量日本一。香り高く、料理やお菓子に使われます。" },
    
    // 福岡県
    { name: "明太子", prefecture: "福岡県", category: "海産物", season: "通年", lat: 33.5904, lng: 130.4017, description: "福岡県の名産品。スケトウダラの卵巣を唐辛子で漬け込んだ珍味です。" },
    { name: "博多ラーメン", prefecture: "福岡県", category: "その他", season: "通年", lat: 33.5904, lng: 130.4017, description: "福岡県博多市のご当地ラーメン。とんこつスープが特徴です。" },
    
    // 佐賀県
    { name: "有明海のり", prefecture: "佐賀県", category: "海産物", season: "冬", lat: 33.2494, lng: 130.2988, description: "有明海で採れる高品質なのり。香り高く、味が濃厚です。" },
    { name: "佐賀牛", prefecture: "佐賀県", category: "肉類", season: "通年", lat: 33.2494, lng: 130.2988, description: "佐賀県で生産される高級和牛。きめ細かな霜降りが特徴です。" },
    
    // 長崎県
    { name: "カステラ", prefecture: "長崎県", category: "お菓子", season: "通年", lat: 32.7503, lng: 129.8779, description: "長崎の代表的な和菓子。南蛮貿易で伝わった洋菓子が日本化したものです。" },
    { name: "長崎ちゃんぽん", prefecture: "長崎県", category: "その他", season: "通年", lat: 32.7503, lng: 129.8779, description: "長崎県の郷土料理。野菜と海鮮がたっぷり入った具だくさんの麺料理です。" },
    
    // 熊本県
    { name: "馬刺し", prefecture: "熊本県", category: "肉類", season: "通年", lat: 32.7898, lng: 130.7417, description: "熊本県の郷土料理。馬肉の刺身で、さっぱりとした味わいです。" },
    { name: "いきなり団子", prefecture: "熊本県", category: "お菓子", season: "通年", lat: 32.7898, lng: 130.7417, description: "熊本県の郷土菓子。さつまいもとあんこを使った素朴な味の団子です。" },
    
    // 大分県
    { name: "かぼす", prefecture: "大分県", category: "果物", season: "夏", lat: 33.2381, lng: 131.6126, description: "大分県はかぼすの生産量日本一。香り高く、料理のアクセントに最適です。" },
    { name: "とり天", prefecture: "大分県", category: "肉類", season: "通年", lat: 33.2381, lng: 131.6126, description: "大分県の郷土料理。鶏肉を天ぷらにした料理です。" },
    
    // 宮崎県
    { name: "マンゴー", prefecture: "宮崎県", category: "果物", season: "夏", lat: 31.9077, lng: 131.4202, description: "宮崎県はマンゴーの生産量日本一。甘くて香り高い高級フルーツです。" },
    { name: "宮崎牛", prefecture: "宮崎県", category: "肉類", season: "通年", lat: 31.9077, lng: 131.4202, description: "宮崎県で生産される高級和牛。きめ細かな霜降りが特徴です。" },
    
    // 鹿児島県
    { name: "黒豚", prefecture: "鹿児島県", category: "肉類", season: "通年", lat: 31.5602, lng: 130.5581, description: "鹿児島県の在来種で、肉質が柔らかく甘みがある高級豚肉です。" },
    { name: "さつまいも", prefecture: "鹿児島県", category: "野菜", season: "秋", lat: 31.5602, lng: 130.5581, description: "鹿児島県はさつまいもの生産量日本一。甘くて栄養価が高いです。" },
    
    // 沖縄県
    { name: "アグー豚", prefecture: "沖縄県", category: "肉類", season: "通年", lat: 26.2124, lng: 127.6792, description: "沖縄県の在来種で、肉質が柔らかく甘みがある高級豚肉です。" },
    { name: "ゴーヤー", prefecture: "沖縄県", category: "野菜", season: "夏", lat: 26.2124, lng: 127.6792, description: "沖縄県の代表的な野菜。苦味が特徴で、ゴーヤーチャンプルーなどに使われます。" }
];

// 都道府県の中心座標データ
const prefectureCenters = {
    "北海道": { lat: 43.0642, lng: 141.3469 },
    "青森県": { lat: 40.8244, lng: 140.7404 },
    "岩手県": { lat: 39.7036, lng: 141.1525 },
    "宮城県": { lat: 38.2682, lng: 140.8694 },
    "秋田県": { lat: 39.7186, lng: 140.1024 },
    "山形県": { lat: 38.2404, lng: 140.3636 },
    "福島県": { lat: 37.7503, lng: 140.4676 },
    "茨城県": { lat: 36.3418, lng: 140.4468 },
    "栃木県": { lat: 36.5658, lng: 139.8836 },
    "群馬県": { lat: 36.3907, lng: 139.0604 },
    "埼玉県": { lat: 35.8571, lng: 139.6490 },
    "千葉県": { lat: 35.6074, lng: 140.1065 },
    "東京都": { lat: 35.6762, lng: 139.6503 },
    "神奈川県": { lat: 35.4478, lng: 139.6425 },
    "新潟県": { lat: 37.9024, lng: 139.0232 },
    "富山県": { lat: 36.6953, lng: 137.2113 },
    "石川県": { lat: 36.5947, lng: 136.6256 },
    "福井県": { lat: 36.0652, lng: 136.2216 },
    "山梨県": { lat: 35.6642, lng: 138.5683 },
    "長野県": { lat: 36.2048, lng: 138.2529 },
    "岐阜県": { lat: 35.3912, lng: 136.7223 },
    "静岡県": { lat: 34.9769, lng: 138.3831 },
    "愛知県": { lat: 35.1802, lng: 136.9066 },
    "三重県": { lat: 34.7303, lng: 136.5086 },
    "滋賀県": { lat: 35.0045, lng: 135.8683 },
    "京都府": { lat: 35.0116, lng: 135.7681 },
    "大阪府": { lat: 34.6863, lng: 135.5197 },
    "兵庫県": { lat: 34.6901, lng: 135.1956 },
    "奈良県": { lat: 34.6851, lng: 135.8050 },
    "和歌山県": { lat: 34.2261, lng: 135.1675 },
    "鳥取県": { lat: 35.5036, lng: 134.2381 },
    "島根県": { lat: 35.4723, lng: 133.0505 },
    "岡山県": { lat: 34.6618, lng: 133.9350 },
    "広島県": { lat: 34.3966, lng: 132.4596 },
    "山口県": { lat: 34.1861, lng: 131.4705 },
    "徳島県": { lat: 34.0658, lng: 134.5593 },
    "香川県": { lat: 34.3403, lng: 134.0433 },
    "愛媛県": { lat: 33.8416, lng: 132.7660 },
    "高知県": { lat: 33.5597, lng: 133.5311 },
    "福岡県": { lat: 33.5904, lng: 130.4017 },
    "佐賀県": { lat: 33.2494, lng: 130.2988 },
    "長崎県": { lat: 32.7503, lng: 129.8779 },
    "熊本県": { lat: 32.7898, lng: 130.7417 },
    "大分県": { lat: 33.2381, lng: 131.6126 },
    "宮崎県": { lat: 31.9077, lng: 131.4202 },
    "鹿児島県": { lat: 31.5602, lng: 130.5581 },
    "沖縄県": { lat: 26.2124, lng: 127.6792 }
};
