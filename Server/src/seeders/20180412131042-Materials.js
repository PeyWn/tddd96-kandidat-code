'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Materials', [{
      id: 1,
      name: 'Grund 2',
      article_no: '97125687841',
      sterilizing_time: 270,
      quantity: 4,
      MaterialTypeId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 2,
      name: 'Optik 0 Da Vinci Xi',
      article_no: '646431332',
      sterilizing_time: 300,
      quantity: 3,
      MaterialTypeId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 3,
      name: 'Lap.scopi Da Vinci 1',
      article_no: '4646433563',
      sterilizing_time: 300,
      quantity: 3,
      MaterialTypeId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 4,
      name: 'Lap.scopi Da Vinci 2',
      article_no: '43433534',
      sterilizing_time: 300,
      quantity: 2,
      MaterialTypeId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 5,
      name: 'Gasvärmare 2 del',
      article_no: '666424346',
      sterilizing_time: 270,
      quantity: 4,
      MaterialTypeId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 6,
      name: 'Spol-sug, Stryker',
      article_no: '464643221',
      sterilizing_time: 0,
      quantity: 1,
      MaterialTypeId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 7,
      name: 'Da Vinci Xi-robot',
      article_no: '6545434644',
      sterilizing_time: 0,
      quantity: 1,
      MaterialTypeId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 8,
      name: 'Da Vinci Xi-stapel',
      article_no: '54656644',
      sterilizing_time: 0,
      quantity: 1,
      MaterialTypeId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 9,
      name: 'Operationskonsol Da Vinci Xi',
      article_no: '65434315',
      sterilizing_time: 0,
      quantity: 1,
      MaterialTypeId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 10,
      name: 'Hysterektomi',
      article_no: '65468431315',
      sterilizing_time: 270,
      quantity: 6,
      MaterialTypeId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 11,
      name: 'Spärrar till Permanhake 2 st BRÅDSKANDE',
      article_no: '6484313572',
      sterilizing_time: 270,
      quantity: 6,
      MaterialTypeId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 12,
      name: 'Hake Perman självhållande',
      article_no: '556432161',
      sterilizing_time: 270,
      quantity: 6,
      MaterialTypeId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 13,
      name: 'Tång Ligasure 21 cm  BRÅDSKANDE',
      article_no: '54843254220',
      sterilizing_time: 270,
      quantity: 2,
      MaterialTypeId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 14,
      name: 'Magnetmatta',
      article_no: '123456789',
      sterilizing_time: 270,
      quantity: 10,
      MaterialTypeId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 15,
      name: 'Grund 3',
      article_no: '99721243131',
      sterilizing_time: 270,
      quantity: 4,
      MaterialTypeId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 16,
      name: 'Bipolär diatermikabel med pincett 15-16 cm',
      article_no: '54463111',
      sterilizing_time: 270,
      quantity: 15,
      MaterialTypeId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 17,
      name: 'Bipolär diatermikabel med pincett 15-16 cm',
      article_no: '54463111',
      sterilizing_time: 270,
      quantity: 15,
      MaterialTypeId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 18,
      name: 'Hake Langenbeck 20 x 45 mm  2 st',
      article_no: '4543216431',
      sterilizing_time: 270,
      quantity: 10,
      MaterialTypeId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 19,
      name: 'Lap.tomi stort',
      article_no: '98122551223',
      sterilizing_time: 270,
      quantity: 3,
      MaterialTypeId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 20,
      name: 'Nervmonitorering',
      article_no: '1313464656',
      sterilizing_time: 270,
      quantity: 1,
      MaterialTypeId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 21,
      name: 'Lap.scopi Grund',
      article_no: '994513234',
      sterilizing_time: 270,
      quantity: 2,
      MaterialTypeId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 22,
      name: 'EndoEye',
      article_no: '649324522',
      sterilizing_time: 270,
      quantity: 1,
      MaterialTypeId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 23,
      name: 'Grund 1',
      article_no: '55313513',
      sterilizing_time: 270,
      quantity: 5,
      MaterialTypeId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 24,
      name: 'Thunderbeatsladd Olympys',
      article_no: '6563994123',
      sterilizing_time: 270,
      quantity: 1,
      MaterialTypeId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 25,
      name: 'Thunderbeat',
      article_no: '87349343535',
      sterilizing_time: 0,
      quantity: 1,
      MaterialTypeId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 26,
      name: 'Gastroscop',
      article_no: '9513543116',
      sterilizing_time: 90,
      quantity: 2,
      MaterialTypeId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 27,
      name: 'Gastrocopistapel',
      article_no: '323213213',
      sterilizing_time: 0,
      quantity: 1,
      MaterialTypeId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 28,
      name: 'Omni-Tract 2',
      article_no: '8765456454',
      sterilizing_time: 270,
      quantity: 2,
      MaterialTypeId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 29,
      name: 'Omni-Tract 1',
      article_no: '46434524',
      sterilizing_time: 270,
      quantity: 2,
      MaterialTypeId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 30,
      name: 'Revbensinstrument',
      article_no: '16434225',
      sterilizing_time: 270,
      quantity: 1,
      MaterialTypeId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 31,
      name: 'Hake Rehn böjd bajonett 50 x 130',
      article_no: '32131132531',
      sterilizing_time: 270,
      quantity: 5,
      MaterialTypeId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 32,
      name: 'Hake Rehn böjd bajonett 70 x 130',
      article_no: '53116510',
      sterilizing_time: 270,
      quantity: 5,
      MaterialTypeId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 33,
      name: 'Peang Crafoord böjd 24cm 5st',
      article_no: '54613541213',
      sterilizing_time: 270,
      quantity: 20,
      MaterialTypeId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 34,
      name: 'Hake Doyen 55 x 120',
      article_no: '564510331',
      sterilizing_time: 270,
      quantity: 7,
      MaterialTypeId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 35,
      name: 'Hake Desmarres ögonlock 15mm 2st',
      article_no: '56430315421',
      sterilizing_time: 270,
      quantity: 3,
      MaterialTypeId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 36,
      name: 'Hake Doyen 35 x 130',
      article_no: '5433121543',
      sterilizing_time: 270,
      quantity: 3,
      MaterialTypeId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 37,
      name: 'Thomson hake 3',
      article_no: '546131211',
      sterilizing_time: 270,
      quantity: 2,
      MaterialTypeId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 38,
      name: 'Sonoca 300',
      article_no: '56451321213',
      sterilizing_time: 270,
      quantity: 2,
      MaterialTypeId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 39,
      name: 'Tillägg till övre buk',
      article_no: '66354121',
      sterilizing_time: 270,
      quantity: 2,
      MaterialTypeId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 40,
      name: 'Thompson hake 1',
      article_no: '5415541355',
      sterilizing_time: 270,
      quantity: 2,
      MaterialTypeId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 41,
      name: 'Thomson hake 2',
      article_no: '6566325663',
      sterilizing_time: 270,
      quantity: 2,
      MaterialTypeId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 42,
      name: 'Clipstång Yasargil +2stora,2små clips',
      article_no: '5541225511',
      sterilizing_time: 270,
      quantity: 3,
      MaterialTypeId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 43,
      name: 'Rengöringsborste till söring',
      article_no: '632214563',
      sterilizing_time: 270,
      quantity: 5,
      MaterialTypeId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 44,
      name: 'Pincett DeBakey 30cm',
      article_no: '8962178',
      sterilizing_time: 270,
      quantity: 20,
      MaterialTypeId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 45,
      name: 'Lamphandtag stort + manöverhandtag',
      article_no: '9974232',
      sterilizing_time: 270,
      quantity: 40,
      MaterialTypeId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 46,
      name: 'Söring MBC',
      article_no: '64684321451',
      sterilizing_time: 0,
      quantity: 1,
      MaterialTypeId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 47,
      name: 'Hake Perman Självhållande 2 del',
      article_no: '5451326841',
      sterilizing_time: 270,
      quantity: 4,
      MaterialTypeId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 48,
      name: 'Tång Cremaliere',
      article_no: '415464364',
      sterilizing_time: 270,
      quantity: 2,
      MaterialTypeId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 49,
      name: 'Kanyl Cholangiografi 1,8 15G',
      article_no: '236532',
      sterilizing_time: 270,
      quantity: 10,
      MaterialTypeId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 50,
      name: 'Tång Hultén',
      article_no: '464316131',
      sterilizing_time: 270,
      quantity: 2,
      MaterialTypeId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 51,
      name: 'Philips C-båge',
      article_no: '1122336655',
      sterilizing_time: 0,
      quantity: 1,
      MaterialTypeId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 52,
      name: 'Röntgenskärm',
      article_no: '33565233',
      sterilizing_time: 0,
      quantity: 1,
      MaterialTypeId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Materials');
  }
};
