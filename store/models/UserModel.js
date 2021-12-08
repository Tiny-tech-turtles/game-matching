export const UserModel = {
  getInitData() {
    return {
      name: '',
      role: 'user',
      imageURL: '',
      id: '',
      age: '',
      level: '',
      devicese: [],
      genrese: [],
      type: '',
      followUsers: [],
    }
  },
  getPropeties() {
    const propety = {
      levels: [
        '初心者',
        '中級者',
        '上級者',
        'プロ',
      ],
      devicese: [
        'PC',
        'Switch',
        'スマホ',
        'Xbox',
        'PS5',
        'PS4',
      ],
      genrese: [
        'シューティング',
        'アクション',
        'ロールプレイング',
        'アドベンチャー',
        'レース',
        'パズル',
        'シミュレーション',
      ],
      typese: [
        'ガチ勢',
        'エンジョイ勢',
        'プロです'
      ],
    }
    return propety
  }
}