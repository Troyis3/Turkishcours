// Türkçe Dilbilgisi — авторский курс турецкой грамматики
// Оригинальные объяснения, примеры и задания (не воспроизводит текст какого-либо учебника).

const LEVELS = [
  {id:'basics', label:'Основы', desc:'Алфавит, гармония гласных, простые предложения, множественное число'},
  {id:'cases', label:'Падежи и время', desc:'Падежная система, принадлежность, настоящее и прошедшее время'},
  {id:'advanced', label:'Продвинутый уровень', desc:'Причастия, деепричастия, наклонения, залоги'}
];

const LESSONS = [

// ===================== LESSON 1 =====================
{
  id:1, level:'basics',
  title:'Алфавит и произношение',
  subtitle:'29 букв, 8 гласных и логика турецкого письма — фундамент, без которого дальше не сдвинуться.',
  theory:[
    {h:'Почему турецкий алфавит — это подарок', html:`
      <p>Турецкий использует латиницу с 1928 года, и, в отличие от английского, здесь почти нет исключений:
      каждая буква читается всегда одинаково. Выучив звук буквы один раз, вы прочитаете любое слово.
      Букв — 29: в турецком алфавите <b>нет</b> Q, W, X, зато есть несколько букв, которых нет в русском восприятии латиницы.</p>`},
    {h:'Особые буквы', html:`
      <table>
        <tr><th>Буква</th><th>Звук</th><th>Пример</th></tr>
        <tr><td class="tr">ı</td><td>«ы», но без i-точки — гласная заднего ряда</td><td class="tr">kız</td></tr>
        <tr><td class="tr">ö</td><td>как нем./тур. «ö», близко к «ё» без «й»</td><td class="tr">göz</td></tr>
        <tr><td class="tr">ü</td><td>как «ю» без «й», губы вытянуты трубочкой</td><td class="tr">gül</td></tr>
        <tr><td class="tr">ş</td><td>«ш»</td><td class="tr">şeker</td></tr>
        <tr><td class="tr">ç</td><td>«ч»</td><td class="tr">çay</td></tr>
        <tr><td class="tr">ğ</td><td>«йумушак ге»: сама по себе не произносится, а удлиняет предыдущий гласный</td><td class="tr">dağ</td></tr>
        <tr><td class="tr">c</td><td>«дж»</td><td class="tr">can</td></tr>
        <tr><td class="tr">j</td><td>«ж» (только в заимствованиях)</td><td class="tr">jeton</td></tr>
      </table>`},
    {h:'8 гласных — основа гармонии', html:`
      <p>Все дальнейшие правила (в том числе гармония гласных из Урока 2) держатся на делении гласных
      по двум признакам: <b>ряд</b> (передние/задние) и <b>огубленность</b> (огубленные/неогубленные).</p>
      <table>
        <tr><th></th><th>Неогубленные</th><th>Огубленные</th></tr>
        <tr><td>Передние (тонкие)</td><td class="tr">e, i</td><td class="tr">ö, ü</td></tr>
        <tr><td>Задние (толстые)</td><td class="tr">a, ı</td><td class="tr">o, u</td></tr>
      </table>`},
  ],
  nuances:[
    'Буква İ/i (с точкой) и I/ı (без точки) — это две разные буквы турецкого алфавита, а не опечатка. Даже заглавная «i» пишется как İ.',
    'Ударение в турецком слабое и почти всегда падает на последний слог слова, но в аффиксах-исключениях (например, отрицании -mA-) оно «убегает» на предыдущий слог — об этом отдельно в грамматике глагола.'
  ],
  examples:[
    {tr:'çocuk', ru:'ребёнок'},
    {tr:'şehir', ru:'город'},
    {tr:'güneş', ru:'солнце'},
    {tr:'öğretmen', ru:'учитель'},
    {tr:'yağmur', ru:'дождь'}
  ],
  exercises:[
    {type:'choice', q:'Какая буква передаёт звук «ш»?', options:['c','ş','ç','j'], answer:1, explain:'ş читается как русское «ш»: şeker — сахар.'},
    {type:'choice', q:'Слово <span class="tr">dağ</span> (гора) произносится примерно как:', options:['«даг» с чётким «г»','«да:» с удлинением гласного','«дадж»','«дах»'], answer:1, explain:'ğ (yumuşak ge) не даёт согласного звука, а удлиняет предшествующий гласный.'},
    {type:'fill', q:'Впишите турецкую букву, которая означает звук «ч»:', answer:['ç','Ç'], explain:'ç — например, çay (чай).'},
  ]
},

// ===================== LESSON 2 =====================
{
  id:2, level:'basics',
  title:'Гармония гласных и глагол «быть»',
  subtitle:'Главный закон турецкой грамматики: гласный в аффиксе всегда «согласован» с последним гласным корня.',
  theory:[
    {h:'Закон гармонии гласных (büyük ünlü uyumu)', html:`
      <p>Почти каждый аффикс в турецком имеет несколько вариантов гласного, и выбор зависит от последнего гласного
      слова, к которому аффикс присоединяется. Двухвариантная гармония (e/a) встречается в старых аффиксах,
      но основная и самая частая — <b>четырёхвариантная</b>: гласный аффикса принимает вид i / ı / ü / u,
      «копируя» ряд и огубленность последнего гласного корня.</p>
      <table>
        <tr><th>Последний гласный корня</th><th>Гласный аффикса (по типу «i»)</th></tr>
        <tr><td class="tr">a, ı</td><td class="tr">ı</td></tr>
        <tr><td class="tr">e, i</td><td class="tr">i</td></tr>
        <tr><td class="tr">o, u</td><td class="tr">u</td></tr>
        <tr><td class="tr">ö, ü</td><td class="tr">ü</td></tr>
      </table>
      <p>Именно поэтому окончание множественного числа (Урок 3) выглядит то как <span class="suffix">-lar</span>,
      то как <span class="suffix">-ler</span> — это один и тот же аффикс с двумя гармонизированными вариантами.</p>`},
    {h:'Личные местоимения', html:`
      <table><tr><th>Турецкий</th><th>Перевод</th></tr>
      <tr><td class="tr">ben</td><td>я</td></tr><tr><td class="tr">sen</td><td>ты</td></tr>
      <tr><td class="tr">o</td><td>он / она / оно</td></tr><tr><td class="tr">biz</td><td>мы</td></tr>
      <tr><td class="tr">siz</td><td>вы</td></tr><tr><td class="tr">onlar</td><td>они</td></tr></table>`},
    {h:'Аффиксы сказуемости (глагол «быть» в настоящем)', html:`
      <p>В турецком нет отдельного глагола «быть» в настоящем времени — вместо него к имени присоединяется
      личный аффикс:</p>
      <table><tr><th>Лицо</th><th>Аффикс</th><th>Пример</th></tr>
      <tr><td>ben</td><td class="suffix">-(y)Im</td><td class="tr">öğretmenim — я учитель</td></tr>
      <tr><td>sen</td><td class="suffix">-sIn</td><td class="tr">öğretmensin</td></tr>
      <tr><td>o</td><td class="suffix">(—)</td><td class="tr">öğretmen — он учитель</td></tr>
      <tr><td>biz</td><td class="suffix">-(y)Iz</td><td class="tr">öğretmeniz</td></tr>
      <tr><td>siz</td><td class="suffix">-sInIz</td><td class="tr">öğretmensiniz</td></tr>
      <tr><td>onlar</td><td class="suffix">-lAr</td><td class="tr">öğretmenler(dir)</td></tr>
      </table>
      <p>Заглавные буквы в формулах (I, A) — условное обозначение «гармонизирующегося» гласного: вместо
      него подставляется i/ı/ü/u или e/a по таблице гармонии.</p>`}
  ],
  nuances:[
    'Вопросительная частица mi/mı/mu/mü пишется отдельным словом и тоже подчиняется гармонии: Öğretmen misiniz? — Вы учитель? Личный аффикс в этом случае «переезжает» на mi: öğretmen mi-siniz.',
    'Отрицание при именах строится словом değil (тоже гармонизирующим личный аффикс): Öğretmen değilim — Я не учитель.'
  ],
  examples:[
    {tr:'Ben doktorum.', ru:'Я врач.'},
    {tr:'Sen öğrencisin.', ru:'Ты студент.'},
    {tr:'Biz Rusuz.', ru:'Мы русские.'},
    {tr:'Onlar mutlu.', ru:'Они счастливы.'},
    {tr:'Yorgun musun?', ru:'Ты устал?'}
  ],
  exercises:[
    {type:'choice', q:'Какой вариант аффикса множественного/личного числа встанет после слова <span class="tr">gül</span> (роза, гласный ü)?', options:['-lar','-lir','-lür','-ler'], answer:3, explain:'ü относится к передним огубленным, но аффикс -lAr имеет только 2 варианта (a/e) — düz ünlü uyumu: gül + ler = güller.'},
    {type:'choice', q:'Как сказать «Я студент» (student = öğrenci)?', options:['Öğrenciyim','Öğrencisin','Öğrenciyiz','Öğrenci'], answer:0, explain:'öğrenci заканчивается на гласную i, поэтому вставляется буфер -y-: öğrenci+yim.'},
    {type:'fill', q:'Переведите: «Вы (мн.ч./вежл.) врачи» — Siz doktor___', answer:['sunuz','sunuz.'], explain:'doktor → o,u в последнем слоге → аффикс -sunuz: doktorsunuz.'},
  ]
},

// ===================== LESSON 3 =====================
{
  id:3, level:'basics',
  title:'Множественное число, вопросы и отрицание',
  subtitle:'Указательные и вопросительные местоимения, частица mi, отрицание değil и конструкция var/yok.',
  theory:[
    {h:'Множественное число', html:`
      <p>Аффикс <span class="suffix">-lAr</span> (двухвариантный: -lar/-ler) добавляется к любому существительному
      независимо от числа перед ним, если это число не указано явно. Если перед словом уже стоит числительное,
      множественное число обычно не ставится: <span class="tr">üç kitap</span> (три книги), а не üç kitaplar.</p>
      <p class="tr">ev → evler (дома), araba → arabalar (машины)</p>`},
    {h:'Указательные местоимения', html:`
      <table><tr><th>Форма</th><th>Значение</th></tr>
      <tr><td class="tr">bu / bunlar</td><td>этот, это (рядом с говорящим) / эти</td></tr>
      <tr><td class="tr">şu / şunlar</td><td>тот (чуть дальше, часто с указательным жестом) / те</td></tr>
      <tr><td class="tr">o / onlar</td><td>тот (далеко, или уже упомянутый) / те, они</td></tr></table>`},
    {h:'Вопросительные местоимения', html:`
      <p><span class="tr">kim?</span> — кто?, <span class="tr">ne?</span> — что?,
      <span class="tr">nerede?</span> — где?, <span class="tr">nasıl?</span> — как?,
      <span class="tr">kaç?</span> — сколько?, <span class="tr">hangi?</span> — какой (из)?</p>`},
    {h:'Отрицание değil и вопросительная частица mi', html:`
      <p><span class="suffix">değil</span> отрицает имена и прилагательные: <span class="tr">Bu kalem değil</span> — Это не ручка.
      Частица <span class="tr">mi/mı/mu/mü</span> превращает утверждение в вопрос и всегда пишется отдельно,
      согласуясь по гармонии с предыдущим словом: <span class="tr">Bu kalem mi?</span> — Это ручка?</p>`},
    {h:'Var / Yok — «есть / нет»', html:`
      <p>Для выражения наличия/отсутствия используются слова <span class="suffix">var</span> (есть, имеется) и
      <span class="suffix">yok</span> (нет, отсутствует) — они ставятся в конец предложения:</p>
      <p class="tr">Masada bir kitap var. — На столе есть книга.<br>Zamanım yok. — У меня нет времени.</p>`}
  ],
  nuances:[
    'şu используется реже, чем bu и o, и почти всегда сопровождается жестом либо указывает на то, что вот-вот будет названо: Şunu istiyorum — Я хочу вот это.',
    'Var/yok не спрягаются по лицам как обычный глагол — лицо выражается отдельно через принадлежность (Урок 5): Param yok — досл. «моих денег нет».'
  ],
  examples:[
    {tr:'Bu ne?', ru:'Это что?'},
    {tr:'Şu kim?', ru:'Вон тот кто?'},
    {tr:'Odada kimse yok.', ru:'В комнате никого нет.'},
    {tr:'Bunlar benim kitaplarım.', ru:'Это мои книги.'},
    {tr:'Hava sıcak değil.', ru:'Погода не жаркая.'}
  ],
  exercises:[
    {type:'choice', q:'Как будет «эти дома» (ev — дом)?', options:['bu evler','bunlar evler','bu ev','evler bunlar'], answer:0, explain:'Указательное bu/şu/o перед множественным числом остаётся в базовой форме: bu evler.'},
    {type:'choice', q:'Выберите верный вариант отрицания: «Это не учитель» (öğretmen)', options:['Bu öğretmen yok','Bu öğretmen değil','Bu değil öğretmen','Öğretmen bu değil misin'], answer:1, explain:'değil ставится после имени: Bu öğretmen değil.'},
    {type:'fill', q:'Переведите словом var или yok: «У меня есть время» — Zamanım ___', answer:['var'], explain:'Наличие чего-либо выражается словом var в конце фразы.'},
  ]
},

// ===================== LESSON 4 =====================
{
  id:4, level:'basics',
  title:'Настоящее продолженное время (-Iyor)',
  subtitle:'Время «прямо сейчас» — самое частотное время в разговорной речи.',
  theory:[
    {h:'Образование', html:`
      <p>Формула: <b>основа глагола + гармонизирующийся гласный (i/ı/u/ü) + -yor + личный аффикс</b>.
      Аффикс <span class="suffix">-Iyor</span> — единственный, который <b>не</b> подчиняется полной гармонии дальше
      «i»: сам -yor всегда пишется одинаково, гармонизируется только соединительный гласный перед ним.</p>
      <table><tr><th>Лицо</th><th>Личный аффикс</th><th class="tr">gel- (приходить)</th></tr>
      <tr><td>ben</td><td class="suffix">-yorum</td><td class="tr">geliyorum</td></tr>
      <tr><td>sen</td><td class="suffix">-yorsun</td><td class="tr">geliyorsun</td></tr>
      <tr><td>o</td><td class="suffix">-yor</td><td class="tr">geliyor</td></tr>
      <tr><td>biz</td><td class="suffix">-yoruz</td><td class="tr">geliyoruz</td></tr>
      <tr><td>siz</td><td class="suffix">-yorsunuz</td><td class="tr">geliyorsunuz</td></tr>
      <tr><td>onlar</td><td class="suffix">-yorlar</td><td class="tr">geliyorlar</td></tr></table>`},
    {h:'Глагол на гласную', html:`
      <p>Если основа глагола заканчивается на гласную (например, <span class="tr">bekle-</span> — ждать), эта
      гласная выпадает перед -Iyor: <span class="tr">bekle+iyor → bekliyor</span> (не bekleiyor).</p>`},
    {h:'Отрицание и вопрос', html:`
      <p>Отрицание — аффикс <span class="suffix">-mI-</span> перед -yor (само -yor не меняется, но ударение слова
      «убегает» на слог перед -mI-): <span class="tr">gel-mi-yor-um</span> — я не прихожу/не иду.
      Вопрос строится частицей mi после всей формы: <span class="tr">Geliyor musun?</span> — Ты идёшь?</p>`}
  ],
  nuances:[
    'В отличие от русского «сейчас», -Iyor нередко переводится и обычным настоящим для действий, воспринимаемых как временные, но регулярные: Bu ay çok çalışıyorum — В этом месяце я много работаю.',
    '-Iyor также используется для ближайшего будущего с уже принятым решением: Yarın geliyorum — Завтра я приезжаю (уже решено).'
  ],
  examples:[
    {tr:'Ne yapıyorsun?', ru:'Что ты делаешь?'},
    {tr:'Türkçe öğreniyorum.', ru:'Я учу турецкий.'},
    {tr:'Onlar televizyon izliyorlar.', ru:'Они смотрят телевизор.'},
    {tr:'Yağmur yağmıyor.', ru:'Дождь не идёт.'},
    {tr:'Anlıyor musunuz?', ru:'Вы понимаете?'}
  ],
  exercises:[
    {type:'choice', q:'Выберите верную форму глагола <span class="tr">oku-</span> (читать) для «o» (он/она):', options:['okuyor','okuiyor','okiyor','okyor'], answer:0, explain:'Основа на гласную u + -Iyor: соединительный звук «y» вставляется как буфер: oku+yor = okuyor.'},
    {type:'choice', q:'Как будет «Мы не работаем» (çalış-)?', options:['Çalışmıyoruz','Çalışıyoruz değil','Çalışmayoruz','Çalışıyormuyuz'], answer:0, explain:'Отрицание -mI- вставляется перед -yor: çalış+mı+yor+uz = çalışmıyoruz.'},
    {type:'fill', q:'Переведите на турецкий глагол «идти/приходить» (gel-) в вопросе: «Ты идёшь?» — впишите форму глагола с вопросительной частицей', answer:['geliyor musun','Geliyor musun','geliyor musun?'], explain:'geliyor + musun (частица mi гармонизируется в mu, личный аффикс -sun добавляется к частице).'},
  ]
},

// ===================== LESSON 5 =====================
{
  id:5, level:'cases',
  title:'Родительный падеж и принадлежность (изафет)',
  subtitle:'Как сказать «моя книга», «дверь дома», «его имя» — ключевая конструкция турецкого синтаксиса.',
  theory:[
    {h:'Аффиксы принадлежности (притяжательные)', html:`
      <p>Вместо притяжательных местоимений («мой, твой…») турецкий добавляет к существительному
      личный аффикс принадлежности:</p>
      <table><tr><th>Лицо</th><th>Аффикс</th><th class="tr">ev (дом)</th><th class="tr">araba (машина)</th></tr>
      <tr><td>benim (мой)</td><td class="suffix">-(I)m</td><td class="tr">evim</td><td class="tr">arabam</td></tr>
      <tr><td>senin (твой)</td><td class="suffix">-(I)n</td><td class="tr">evin</td><td class="tr">araban</td></tr>
      <tr><td>onun (его/её)</td><td class="suffix">-(s)I</td><td class="tr">evi</td><td class="tr">arabası</td></tr>
      <tr><td>bizim (наш)</td><td class="suffix">-(I)mIz</td><td class="tr">evimiz</td><td class="tr">arabamız</td></tr>
      <tr><td>sizin (ваш)</td><td class="suffix">-(I)nIz</td><td class="tr">eviniz</td><td class="tr">arabanız</td></tr>
      <tr><td>onların (их)</td><td class="suffix">-lArI</td><td class="tr">evleri</td><td class="tr">arabaları</td></tr>
      </table>
      <p>Буква в скобках (I, s) — буферная: она появляется, только если основа заканчивается на гласную
      (тогда добавляется «буфер», чтобы не столкнулись два гласных): araba+sı, ev+i.</p>`},
    {h:'Родительный падеж — «чей?»', html:`
      <p>Родительный падеж отвечает на вопрос <span class="tr">kimin?</span> (чей?) и оформляется аффиксом
      <span class="suffix">-(n)In</span> (4 варианта: -ın/-in/-un/-ün):</p>
      <p class="tr">Ali'nin kitabı — книга Али (досл. «Али-его книга»)<br>
      öğretmenin çantası — сумка учителя</p>`},
    {h:'Изафет: два имени в связке', html:`
      <p>Когда одно существительное определяет другое («дверь дома», «столица Турции»), оба слова получают
      аффиксы: первое (владелец) — родительный падеж, второе (предмет) — аффикс принадлежности 3-го лица.
      Это называется <b>изафетом</b> (belirtili isim tamlaması):</p>
      <p class="tr">ev-in kapı-sı — дверь дома<br>Türkiye'nin başkenti — столица Турции</p>
      <p>Если «владелец» не конкретизирован, а обозначает материал/категорию (неопределённый изафет),
      родительный падеж опускается, остаётся только аффикс принадлежности на втором слове:</p>
      <p class="tr">çocuk odası — детская комната (досл. «ребёнок-комната», не «комната конкретного ребёнка»)</p>`}
  ],
  nuances:[
    'onun evi может значить и «его дом», и «её дом» — o универсально для всех родов. Различие только по контексту.',
    'Апостроф в Ali\'nin, Türkiye\'nin ставится потому, что это имя собственное — аффиксы к именам собственным всегда пишутся через апостроф.'
  ],
  examples:[
    {tr:'Bu benim çantam.', ru:'Это моя сумка.'},
    {tr:'Kardeşimin adı Ahmet.', ru:'Имя моего брата — Ахмет.'},
    {tr:'Kapının rengi mavi.', ru:'Цвет двери — синий.'},
    {tr:'Türkçe dersi zor değil.', ru:'Урок турецкого не сложный.'},
    {tr:'Onların evi büyük.', ru:'Их дом большой.'}
  ],
  exercises:[
    {type:'choice', q:'Как сказать «его/её имя» (ad — имя)?', options:['adım','adın','adı','adımız'], answer:2, explain:'3-е лицо: ad + буфер s + ı = adı.'},
    {type:'choice', q:'Выберите верный изафет «ключ от машины» (araba, anahtar):', options:['araba anahtar','arabanın anahtarı','arabanın anahtar','araba anahtarı (неопр.)'], answer:1, explain:'Конкретная машина → определённый изафет: araba+nın anahtar+ı.'},
    {type:'fill', q:'Впишите аффикс принадлежности: наш дом — ev___', answer:['imiz','imiz.'], explain:'bizim → -ImIz: ev+imiz = evimiz.'},
  ]
},

// ===================== LESSON 6 =====================
{
  id:6, level:'cases',
  title:'Дательный и местный падежи',
  subtitle:'«Куда?» и «где?» — два соседних падежа, которые часто путают на старте.',
  theory:[
    {h:'Дательный падеж (yönelme hâli) — «куда? кому?»', html:`
      <p>Аффикс <span class="suffix">-(y)A</span> (2 варианта: -a/-e) отвечает на вопрос
      <span class="tr">nereye? kime?</span>:</p>
      <p class="tr">okula gidiyorum — я иду в школу<br>arkadaşıma yazıyorum — я пишу другу</p>`},
    {h:'Местный падеж (bulunma hâli) — «где?»', html:`
      <p>Аффикс <span class="suffix">-DA</span> (4 варианта с учётом озвончения: -da/-de/-ta/-te) отвечает
      на вопрос <span class="tr">nerede?</span>:</p>
      <p class="tr">okulda — в школе<br>İstanbul'da yaşıyorum — я живу в Стамбуле</p>
      <p>Выбор d/t зависит от последней буквы корня: после глухих согласных (ç,f,h,k,p,s,ş,t) ставится
      глухой вариант -ta/-te: <span class="tr">kitap+ta</span> — в книге.</p>`},
    {h:'Пространственные послелоги', html:`
      <p>Для более точного указания места используются существительные-послелоги с аффиксом принадлежности
      и местным падежом:</p>
      <table><tr><th>Послелог</th><th>Значение</th></tr>
      <tr><td class="tr">içinde</td><td>внутри</td></tr><tr><td class="tr">üstünde / üzerinde</td><td>на, поверх</td></tr>
      <tr><td class="tr">altında</td><td>под</td></tr><tr><td class="tr">yanında</td><td>рядом, около</td></tr>
      <tr><td class="tr">önünde</td><td>перед</td></tr><tr><td class="tr">arkasında</td><td>за, позади</td></tr></table>
      <p class="tr">Masanın üstünde bir kitap var. — На столе есть книга (досл. «стола-на-поверхности»).</p>`}
  ],
  nuances:[
    'Дательный падеж после гласной требует буфера -y-: araba+ya (не arabaa).',
    'Легко перепутать -a/-e (куда) и -da/-de (где): okula (в школу, движение) vs okulda (в школе, нахождение). Это разные падежи, а не варианты одного.'
  ],
  examples:[
    {tr:'Yarın Ankara\'ya gidiyorum.', ru:'Завтра я еду в Анкару.'},
    {tr:'Anahtar çantada.', ru:'Ключ в сумке.'},
    {tr:'Öğretmene soru soruyorum.', ru:'Я задаю вопрос учителю.'},
    {tr:'Kedi kapının önünde.', ru:'Кошка перед дверью.'},
    {tr:'İşte çalışıyorum.', ru:'Я работаю на работе.'}
  ],
  exercises:[
    {type:'choice', q:'«Я иду в кино» (sinema): выберите верный падеж', options:['sinemada gidiyorum','sinemaya gidiyorum','sinemadan gidiyorum','sinema gidiyorum'], answer:1, explain:'Направление движения — дательный падеж: sinema+ya.'},
    {type:'choice', q:'«Книга на столе» — какой аффикс у слова masa (стол) в конструкции с üstünde?', options:['masanın üstünde','masaya üstünde','masada üstünde','masanın üstüne'], answer:0, explain:'Послелог üstünde требует родительного падежа перед собой (изафетная логика): masa+nın üstü+nde.'},
    {type:'fill', q:'Впишите аффикс местного падежа: «в Стамбуле» — İstanbul___', answer:["'da","da"], explain:'После l (звонкий) ставится -da: İstanbul\'da.'},
  ]
},

// ===================== LESSON 7 =====================
{
  id:7, level:'cases',
  title:'Винительный и исходный падежи',
  subtitle:'«Кого/что?» и «откуда?» — плюс конструкция «от… до».',
  theory:[
    {h:'Винительный падеж (belirtme hâli) — «кого? что?»', html:`
      <p>Аффикс <span class="suffix">-(y)I</span> (4 варианта: -ı/-i/-u/-ü) ставится на <b>определённое,
      конкретное</b> прямое дополнение:</p>
      <p class="tr">Kitabı okuyorum. — Я читаю (эту, конкретную) книгу.</p>
      <p>Если дополнение неопределённое (какая-то книга, любая), падеж не ставится вовсе, а само слово
      просто стоит перед глаголом:</p>
      <p class="tr">Kitap okuyorum. — Я читаю книгу (какую-то, вообще занимаюсь чтением).</p>`},
    {h:'Исходный падеж (ayrılma/çıkma hâli) — «откуда?»', html:`
      <p>Аффикс <span class="suffix">-DAn</span> (4 варианта с озвончением: -dan/-den/-tan/-ten) отвечает
      на вопрос <span class="tr">nereden?</span>:</p>
      <p class="tr">okuldan geliyorum — я иду из школы<br>Bu haber gazeteden. — Эта новость из газеты.</p>
      <p>Также используется для сравнения (аналог «чем» в русском) и с некоторыми глаголами (бояться,
      уставать от чего-либо и т.д.): <span class="tr">Ondan daha uzun</span> — выше, чем он.</p>`},
    {h:'Конструкция «от… до» (-DAn … -(y)A kadar)', html:`
      <p class="tr">Sabahtan akşama kadar çalışıyorum. — Я работаю с утра до вечера.<br>
      İstanbul'dan Ankara'ya kadar üç saat sürüyor. — От Стамбула до Анкары — три часа пути.</p>`}
  ],
  nuances:[
    'Различие определённое/неопределённое прямое дополнение — одна из главных тонкостей турецкого синтаксиса: Su içiyorum (пью воду, вообще) vs Suyu içiyorum (пью (ту самую) воду).',
    'Личные местоимения в винительном падеже имеют особые формы: beni (меня), seni (тебя), onu (его/её), bizi, sizi, onları.'
  ],
  examples:[
    {tr:'Filmi izledin mi?', ru:'Ты посмотрел (тот) фильм?'},
    {tr:'Market\'ten ekmek aldım.', ru:'Я купил хлеб в магазине (досл. «из магазина»).'},
    {tr:'Beni duyuyor musun?', ru:'Ты меня слышишь?'},
    {tr:'Pazartesiden cumaya kadar çalışıyorum.', ru:'Я работаю с понедельника до пятницы.'},
    {tr:'Bu şehirden çok hoşlanıyorum.', ru:'Мне очень нравится этот город (досл. «от этого города»).'}
  ],
  exercises:[
    {type:'choice', q:'«Я пью воду» (вообще, не конкретную) — выберите верный вариант', options:['Suyu içiyorum','Su içiyorum','Suya içiyorum','Sudan içiyorum'], answer:1, explain:'Неопределённое прямое дополнение — без падежного аффикса: Su içiyorum.'},
    {type:'choice', q:'«Я устал от работы» (iş — работа): какой падеж у iş?', options:['işi','işe','işte','işten'], answer:3, explain:'Глаголы «уставать/бояться от…» требуют исходного падежа: iş+ten yoruldum.'},
    {type:'fill', q:'Впишите личное местоимение в винительном падеже: «Я тебя люблю» — Ben ___ seviyorum.', answer:['seni'], explain:'ты → sen, винительный падеж: seni.'},
  ]
},

// ===================== LESSON 8 =====================
{
  id:8, level:'cases',
  title:'Простое настоящее-будущее время (geniş zaman)',
  subtitle:'Время привычных действий и общих истин — турецкий аналог Present Simple, с важными нюансами формы.',
  theory:[
    {h:'Образование', html:`
      <p>Geniş zaman (буквально «широкое время») строится по-разному в зависимости от того, кончается ли
      основа на гласный или согласный:</p>
      <ul>
        <li>основа на <b>гласный</b>: + <span class="suffix">-r</span> → <span class="tr">bekle-r</span> (ждёт)</li>
        <li>основа на <b>согласный, 1 слог</b>: чаще + <span class="suffix">-Ar</span> (гармонизир. a/e) →
        <span class="tr">bak-ar</span> (смотрит), но есть частотные исключения (см. ниже)</li>
        <li>основа на <b>согласный, 2+ слога</b>: + <span class="suffix">-Ir</span> (4 варианта i/ı/u/ü) →
        <span class="tr">çalış-ır</span> (работает)</li>
      </ul>
      <table><tr><th>Лицо</th><th class="tr">gel- (приходить)</th></tr>
      <tr><td>ben</td><td class="tr">gelirim</td></tr><tr><td>sen</td><td class="tr">gelirsin</td></tr>
      <tr><td>o</td><td class="tr">gelir</td></tr><tr><td>biz</td><td class="tr">geliriz</td></tr>
      <tr><td>siz</td><td class="tr">gelirsiniz</td></tr><tr><td>onlar</td><td class="tr">gelirler</td></tr>
      </table>`},
    {h:'Группа глаголов-исключений на -Ir', html:`
      <p>Небольшая группа частотных односложных глаголов берёт -Ir/-Ur вместо ожидаемого -Ar:
      <span class="tr">gel-ir, ol-ur, bil-ir, al-ır, bul-ur, gör-ür, ver-ir, kal-ır, san-ır, öl-ür,
      vur-ur, dur-ur, var-ır</span>… Эти глаголы просто нужно запомнить списком.</p>`},
    {h:'Отрицание', html:`
      <p>Отрицательная форма образуется аффиксом <span class="suffix">-mA-</span> + <span class="suffix">-z</span>
      (не -r!): <span class="tr">gel-me-z</span> — не приходит. В 1-м лице ед./мн. числа появляется вставка -m:
      <span class="tr">gelmem, gelmeyiz</span>.</p>`}
  ],
  nuances:[
    'Geniş zaman используется для привычных, регулярных или общих истин (Güneş doğudan doğar — Солнце встаёт на востоке), в отличие от -Iyor, которое подчёркивает «прямо сейчас».',
    'В вежливых просьбах и предложениях geniş zaman в вопросе звучит мягче инфинитива-повелительного: Otobüs kaçta kalkar? — Во сколько отправляется автобус? (обычно, по расписанию).'
  ],
  examples:[
    {tr:'Her sabah kahve içerim.', ru:'Каждое утро я пью кофе.'},
    {tr:'O çok iyi yüzer.', ru:'Он очень хорошо плавает.'},
    {tr:'Bu mağaza pazar günü açılmaz.', ru:'Этот магазин не открывается по воскресеньям.'},
    {tr:'Yardım eder misin?', ru:'Поможешь? (в общем смысле просьбы)'},
    {tr:'Kuşlar uçar, balıklar yüzer.', ru:'Птицы летают, рыбы плавают.'}
  ],
  exercises:[
    {type:'choice', q:'Выберите верную форму глагола <span class="tr">oku-</span> (читать, основа на гласную) для «biz»:', options:['okuruz','okarız','okuyoruz','okurız'], answer:0, explain:'Основа на гласную → просто +r: oku+r+uz = okuruz.'},
    {type:'choice', q:'Глагол <span class="tr">bil-</span> (знать) — глагол-исключение. Как будет «я знаю» в geniş zaman?', options:['bilerim','bilirim','bilarim','bilir'], answer:1, explain:'bil- входит в список исключений и берёт -ir: bilirim.'},
    {type:'fill', q:'Отрицание: «он не понимает» (anla-) — anla___', answer:['maz','maz.'], explain:'Отрицание geniş zaman: -mA- + -z: anla+maz.'},
  ]
},

// ===================== LESSON 9 =====================
{
  id:9, level:'cases',
  title:'Прошедшее категорическое время (-DI)',
  subtitle:'«Я видел своими глазами» — время для фактов, которые говорящий подтверждает лично.',
  theory:[
    {h:'Образование', html:`
      <p>Аффикс <span class="suffix">-DI</span> (4 варианта гласного i/ı/u/ü × 2 варианта согласного d/t
      по глухости — итого 8 письменных форм) добавляется прямо к основе глагола:</p>
      <table><tr><th>Лицо</th><th class="tr">gel- (приходить)</th><th class="tr">bak- (смотреть)</th></tr>
      <tr><td>ben</td><td class="tr">geldim</td><td class="tr">baktım</td></tr>
      <tr><td>sen</td><td class="tr">geldin</td><td class="tr">baktın</td></tr>
      <tr><td>o</td><td class="tr">geldi</td><td class="tr">baktı</td></tr>
      <tr><td>biz</td><td class="tr">geldik</td><td class="tr">baktık</td></tr>
      <tr><td>siz</td><td class="tr">geldiniz</td><td class="tr">baktınız</td></tr>
      <tr><td>onlar</td><td class="tr">geldiler</td><td class="tr">baktılar</td></tr>
      </table>
      <p>Обратите внимание: в 1-м и 2-м лице личный аффикс без начального «y/s» — он присоединяется
      напрямую (geldi-m, а не geldi-yim), в отличие от именных сказуемых из Урока 2.</p>`},
    {h:'Прошедшее время глагола «быть» (idi / -DI после имён)', html:`
      <p>Для прошедшего времени именного сказуемого («был студентом») к имени добавляется тот же
      аффикс -DI, только с другим набором личных окончаний (без начального «y»):</p>
      <p class="tr">Öğrenciydim. — Я был студентом.<br>Yorgundu. — Он был уставшим.</p>`}
  ],
  nuances:[
    '-DI выражает не просто «прошлое», а прошлое, лично увиденное/пережитое или бесспорный факт — в противовес -mIş (Урок 11), которое передаёт то, что говорящий узнал с чужих слов или не видел сам.',
    'Отрицание строится обычным способом: основа + -mA- + -DI: gel-me-di-m — я не пришёл.'
  ],
  examples:[
    {tr:'Dün sinemaya gittim.', ru:'Вчера я ходил в кино.'},
    {tr:'Onu havaalanında gördüm.', ru:'Я видел его в аэропорту.'},
    {tr:'Toplantı saat onda başladı.', ru:'Собрание началось в десять часов.'},
    {tr:'Hiç param kalmadı.', ru:'У меня совсем не осталось денег.'},
    {tr:'Küçükken çok yaramazdım.', ru:'В детстве я был очень непослушным.'}
  ],
  exercises:[
    {type:'choice', q:'Выберите верную форму: «мы написали» (yaz-)', options:['yazdık','yazdim','yazdılar','yazdiniz'], answer:0, explain:'yaz + dı + k (biz): yazdık.'},
    {type:'choice', q:'«Она не пришла» (gel-):', options:['gelmedi','geldimemedi','gelmiyordu','gelmeyecek'], answer:0, explain:'Отрицание в -DI: gel+me+di.'},
    {type:'fill', q:'Впишите личный аффикс: «я был занят» (meşgul) — Meşgul___', answer:['düm','düm.'], explain:'meşgul оканчивается на согласный l, гласный аффикса -DI → ü (гармония по последнему гласному u): meşgul+dü+m.'},
  ]
},

// ===================== LESSON 10 =====================
{
  id:10, level:'advanced',
  title:'Будущее время (-EcEk)',
  subtitle:'Что будет — план, обещание, прогноз.',
  theory:[
    {h:'Образование', html:`
      <p>Аффикс <span class="suffix">-(y)EcEk</span> (2 варианта: -acak/-ecek, плюс буфер -y- после гласной)
      присоединяется к основе глагола:</p>
      <table><tr><th>Лицо</th><th class="tr">gel- (приходить)</th></tr>
      <tr><td>ben</td><td class="tr">geleceğim</td></tr><tr><td>sen</td><td class="tr">geleceksin</td></tr>
      <tr><td>o</td><td class="tr">gelecek</td></tr><tr><td>biz</td><td class="tr">geleceğiz</td></tr>
      <tr><td>siz</td><td class="tr">geleceksiniz</td></tr><tr><td>onlar</td><td class="tr">gelecekler</td></tr>
      </table>
      <p>Перед гласными личными аффиксами (-im, -iz) конечное <span class="suffix">k</span> аффикса переходит
      в <span class="suffix">ğ</span> — это обычное для турецкого «смягчение» k→ğ между гласными:
      gelecek+im → gelece<b>ğ</b>im.</p>`},
    {h:'Отрицание и вопрос', html:`
      <p class="tr">gel-me-yecek-im → gelmeyeceğim — я не приду<br>
      Gelecek misin? — Ты придёшь?</p>`}
  ],
  nuances:[
    '-EcEk выражает более твёрдое намерение или официальный план, тогда как -Iyor в значении будущего (Урок 4) — уже принятое, почти состоявшееся решение о ближайшем будущем.',
    'В официальном и письменном стиле (новости, законы) -EcEk — стандартное время будущего: Toplantı yarın yapılacak — Собрание состоится завтра.'
  ],
  examples:[
    {tr:'Yarın sana yazacağım.', ru:'Завтра я напишу тебе.'},
    {tr:'Bu yaz Türkiye\'ye gideceğiz.', ru:'Этим летом мы поедем в Турцию.'},
    {tr:'Hava yarın yağmurlu olacak.', ru:'Завтра погода будет дождливой.'},
    {tr:'Söz veriyorum, geç kalmayacağım.', ru:'Обещаю, я не опоздаю.'},
    {tr:'Ne zaman evleneceksiniz?', ru:'Когда вы поженитесь?'}
  ],
  exercises:[
    {type:'choice', q:'«Я буду ждать» (bekle-):', options:['bekleceğim','bekleyeceğim','bekliyeceğim','bekleyecekim'], answer:1, explain:'Основа на гласную e требует буфера -y-: bekle+y+ecek+im = bekleyeceğim.'},
    {type:'choice', q:'Почему в форме geleceğim появляется «ğ», а не «k»?', options:['Это опечатка','k переходит в ğ между двумя гласными','Так короче произносить','Только в отрицании'], answer:1, explain:'Регулярное чередование k→ğ, когда после k стоит гласный личный аффикс.'},
    {type:'fill', q:'Впишите верную форму: «они не придут» (gel-) — gel___', answer:['meyecekler','meyecekler.'], explain:'gel + me (отрицание) + yecek + ler = gelmeyecekler.'},
  ]
},

// ===================== LESSON 11 =====================
{
  id:11, level:'advanced',
  title:'Прошедшее субъективное время (-mIş) и эвиденциальность',
  subtitle:'То, что вы узнали с чужих слов, увидели по следам или поняли задним числом.',
  theory:[
    {h:'Образование', html:`
      <p>Аффикс <span class="suffix">-mIş</span> (4 варианта: -mış/-miş/-muş/-müş) присоединяется к основе,
      личные аффиксы — как у именного сказуемого (Урок 2):</p>
      <table><tr><th>Лицо</th><th class="tr">gel- (приходить)</th></tr>
      <tr><td>ben</td><td class="tr">gelmişim</td></tr><tr><td>sen</td><td class="tr">gelmişsin</td></tr>
      <tr><td>o</td><td class="tr">gelmiş</td></tr><tr><td>biz</td><td class="tr">gelmişiz</td></tr>
      <tr><td>siz</td><td class="tr">gelmişsiniz</td></tr><tr><td>onlar</td><td class="tr">gelmişler</td></tr>
      </table>`},
    {h:'Три значения -mIş', html:`
      <ul>
        <li><b>Пересказ / слухи</b> — говорящий не был свидетелем: <span class="tr">Ahmet dün gelmiş</span>
        (я слышал, что Ахмет вчера приехал — сам не видел).</li>
        <li><b>Внезапное открытие / вывод по результату</b>: <span class="tr">Bak, kar yağmış!</span>
        (Смотри, (оказывается) выпал снег! — увидел уже выпавший снег, не сам процесс).</li>
        <li><b>В сказках и анекдотах</b> как стандартное повествовательное прошедшее:
        <span class="tr">Bir varmış, bir yokmuş…</span> (Жили-были…, досл. «было — не было»).</li>
      </ul>`}
  ],
  nuances:[
    'Главное отличие от -DI (Урок 9): -DI = я лично видел/точно знаю; -mIş = мне так сказали / я понял это только по результату, не застав сам процесс. Сравните: Çocuk kırdı (ребёнок разбил — я видел) vs Çocuk kırmış (ребёнок, оказывается, разбил — увидел уже разбитое).',
    'Носители часто используют -mIş, чтобы сознательно снять с себя ответственность за достоверность информации — это вежливая дистанция, а не просто грамматика.'
  ],
  examples:[
    {tr:'Duydum ki, taşınmışsınız.', ru:'Слышал, что вы переехали.'},
    {tr:'Meğer o da orada varmış.', ru:'Оказывается, он тоже там был.'},
    {tr:'Bir zamanlar burada bir saray varmış.', ru:'Когда-то здесь был дворец (по преданию).'},
    {tr:'Anahtarı unutmuşum.', ru:'(Оказывается) я забыл ключ.'},
    {tr:'Çok yorulmuşsun.', ru:'(Видно) ты очень устал.'}
  ],
  exercises:[
    {type:'choice', q:'Вы пришли домой и видите разбитую чашку. Как сказать «Кошка (похоже) разбила чашку»?', options:['Kedi fincanı kırdı','Kedi fincanı kırmış','Kedi fincanı kırıyor','Kedi fincanı kıracak'], answer:1, explain:'Вывод по результату, без личного наблюдения процесса — -mIş.'},
    {type:'choice', q:'Чем -mIş принципиально отличается от -DI?', options:['Ничем, это синонимы','-mIş используется только в вопросах','-mIş означает пересказ/вывод, -DI — личное наблюдение факта','-DI используется только в сказках'], answer:2, explain:'Это эвиденциальное противопоставление: источник информации важен для выбора формы.'},
    {type:'fill', q:'Начните турецкую сказку словами «Жили-были…» — Bir varmış, bir ___', answer:['yokmuş','yokmuş.'], explain:'Устойчивая формула зачина турецких сказок: Bir varmış, bir yokmuş.'},
  ]
},

// ===================== LESSON 12 =====================
{
  id:12, level:'advanced',
  title:'Повелительное наклонение и ключевые послелоги',
  subtitle:'Просьбы и приказы во всех лицах, плюс için, ile, gibi, kadar — слова, без которых не построить сложное предложение.',
  theory:[
    {h:'Повелительное наклонение (emir kipi)', html:`
      <p>В отличие от русского, турецкое повелительное наклонение имеет формы для всех лиц, кроме «я»:</p>
      <table><tr><th>Лицо</th><th class="tr">gel- (приходить)</th><th>Примечание</th></tr>
      <tr><td>sen</td><td class="tr">gel!</td><td>чистая основа, без аффикса</td></tr>
      <tr><td>o</td><td class="tr">gelsin</td><td>«пусть придёт»</td></tr>
      <tr><td>siz</td><td class="tr">gelin / geliniz</td><td>-iniz более официально/вежливо</td></tr>
      <tr><td>onlar</td><td class="tr">gelsinler</td><td>«пусть придут»</td></tr>
      </table>
      <p>Отрицательная форма для «ты»: <span class="tr">gelme!</span> — не приходи!</p>`},
    {h:'Послелог için — «для, ради, из-за»', html:`
      <p class="tr">senin için — для тебя<br>Türkçe öğrenmek için çalışıyorum. — Я занимаюсь, чтобы выучить турецкий.</p>`},
    {h:'Послелог ile (=с, при помощи)', html:`
      <p>Часто сокращается до аффикса <span class="suffix">-(y)lA</span>: <span class="tr">arabayla</span>
      (=araba ile) — на машине; <span class="tr">seninle</span> — с тобой (особая форма местоимений).</p>`},
    {h:'gibi и kadar — сравнение', html:`
      <p class="tr">gibi</span> — «как, подобно»: <span class="tr">Sen benim gibisin.</span> — Ты как я.<br>
      <span class="tr">kadar</span> — «настолько… как» / «до»: <span class="tr">Senin kadar uzun değilim.</span>
      — Я не такой высокий, как ты.</p>`},
    {h:'çünkü — «потому что»', html:`<p class="tr">Gelemedim, çünkü hastaydım. — Я не смог прийти, потому что болел.</p>`}
  ],
  nuances:[
    'geliniz (полная форма) звучит более официально и «канцелярски», чем gelin — выбор зависит от регистра общения.',
    'için после личных местоимений требует родительного падежа: benim için, senin için, onun için — а не ben için.'
  ],
  examples:[
    {tr:'Lütfen sessiz olun.', ru:'Пожалуйста, соблюдайте тишину (мн.ч./вежл.).'},
    {tr:'Bunu kimse için yapmadım, kendim için yaptım.', ru:'Я сделал это не для кого-то — для себя.'},
    {tr:'Kalemle yazıyorum.', ru:'Я пишу ручкой.'},
    {tr:'Onun kadar çalışkan değilim.', ru:'Я не такой трудолюбивый, как он.'},
    {tr:'Acele et, çünkü geç kaldık.', ru:'Поторопись, потому что мы опоздали.'}
  ],
  exercises:[
    {type:'choice', q:'Как вежливо попросить группу людей «Проходите!» (gir- — входить)?', options:['Girsin','Gir!','Girin / Giriniz','Girmesin'], answer:2, explain:'Форма 2-го лица мн.числа/вежл.: girin или более официальное giriniz.'},
    {type:'choice', q:'«Для меня» — выберите верный вариант', options:['ben için','benim için','beni için','bana için'], answer:1, explain:'için требует родительного падежа местоимения: benim için.'},
    {type:'fill', q:'Сократите ile до аффикса: araba ile → araba___', answer:['yla','yla.'], explain:'После гласной ile сокращается до -(y)la/-(y)le: araba+yla.'},
  ]
},

// ===================== LESSON 13 =====================
{
  id:13, level:'advanced',
  title:'Причастия (sıfat-fiil)',
  subtitle:'Как склеить два предложения в одно без союза «который» — турецкий строит придаточные иначе.',
  theory:[
    {h:'Зачем нужны причастия', html:`
      <p>В турецком нет союзного слова «который»: место придаточного определительного предложения занимает
      причастный оборот <b>перед</b> определяемым словом. Есть три основных аффикса — для настоящего,
      прошедшего и будущего значения.</p>`},
    {h:'-An — причастие настоящего/общего времени (действие субъекта)', html:`
      <p class="tr">okuyan çocuk — читающий ребёнок (=çocuk okuyor)<br>
      Türkçe konuşan biri — некто, говорящий по-турецки</p>
      <p>Используется, когда определяемое слово — <b>подлежащее</b> действия внутри причастного оборота.</p>`},
    {h:'-DIk — причастие прошедшего/факта (действие объекта)', html:`
      <p>Используется, когда определяемое слово — <b>дополнение</b> действия; к причастию добавляется
      аффикс принадлежности, указывающий, кто совершил действие:</p>
      <p class="tr">okuduğum kitap — книга, которую я прочитал (досл. «мной-прочитанная книга»)<br>
      dün gördüğüm film — фильм, который я вчера видел</p>`},
    {h:'-EcEk — причастие будущего', html:`
      <p class="tr">yapacağım iş — работа, которую я сделаю<br>gelecek hafta — следующая неделя (буквально «неделя, которая придёт»)</p>`}
  ],
  nuances:[
    'Выбор между -An и -DIk — это не время, а синтаксическая роль: если определяемое слово выполняет действие само — -An; если действие направлено на него (оно — объект) — -DIk(+притяжательный аффикс).',
    '-DIk и -EcEk причастия по форме идентичны отглагольным существительным и активно используются в косвенной речи: Geldiğini biliyorum — Я знаю, что он пришёл (досл. «его прихождение знаю»).'
  ],
  examples:[
    {tr:'Yanımda oturan adam çok konuşkan.', ru:'Мужчина, сидящий рядом со мной, очень разговорчивый.'},
    {tr:'Sana verdiğim kitabı okudun mu?', ru:'Ты прочитал книгу, которую я тебе дал?'},
    {tr:'Yarın göreceğimiz ev çok pahalı.', ru:'Дом, который мы завтра посмотрим, очень дорогой.'},
    {tr:'Unuttuğun anahtar burada.', ru:'Ключ, который ты забыл, здесь.'},
    {tr:'İngilizce bilen birini arıyorum.', ru:'Я ищу кого-то, кто знает английский.'}
  ],
  exercises:[
    {type:'choice', q:'«Мальчик, который играет во дворе» — bahçede oynayan/oynadığı çocuk. Выберите верный вариант:', options:['bahçede oynayan çocuk','bahçede oynadığı çocuk','bahçede oynayacak çocuk (без изменений)','bahçede oynadık çocuk'], answer:0, explain:'Мальчик сам выполняет действие (играет) → -An: oynayan çocuk.'},
    {type:'choice', q:'«Фильм, который я посмотрел вчера» — определяемое слово (фильм) является объектом просмотра. Выберите верный вариант:', options:['izleyen film','dün izlediğim film','dün izleyeceğim film','izlemiş film'], answer:1, explain:'Фильм — объект действия «я посмотрел» → -DIk + притяжательный аффикс: izlediğim film.'},
    {type:'fill', q:'Впишите причастие будущего: «работа, которую я сделаю» — yap___ iş (yapacak + притяж. -ım)', answer:['yapacağım','yapacağım iş'], explain:'yap+acak+ım → yapacağım (k→ğ перед гласным личным аффиксом).'},
  ]
},

// ===================== LESSON 14 =====================
{
  id:14, level:'advanced',
  title:'Деепричастия (zarf-fiil)',
  subtitle:'Связки «сделав», «делая», «не сделав», «когда» — турецкий склеивает действия без союзов.',
  theory:[
    {h:'-(y)Ip — «и, а затем» (последовательность действий)', html:`
      <p>Соединяет два действия одного субъекта, откладывая время/лицо до последнего глагола:</p>
      <p class="tr">Kalkıp yüzümü yıkadım. — Я встал и умылся (досл. «встав, умылся»).</p>`},
    {h:'-ArAk — «делая, посредством» (образ действия / одновременность)', html:`
      <p class="tr">Gülerek anlattı. — Он рассказал, смеясь.<br>
      Çalışarak para kazanıyorum. — Я зарабатываю деньги, работая (=трудом).</p>`},
    {h:'-mEdEn (önce) — «не сделав» / «прежде чем»', html:`
      <p class="tr">Yemek yemeden çıktı. — Он ушёл, не поев.<br>
      Sen gelmeden ben gittim. — Я ушёл до того, как ты пришёл.</p>`},
    {h:'-(y)IncA — «как только / когда»', html:`
      <p class="tr">Zil çalınca herkes sustu. — Как только прозвенел звонок, все замолчали.</p>`},
    {h:'-DIğIndA / -kEn — «когда» (в момент, в процессе)', html:`
      <p class="tr">Ben geldiğimde o uyuyordu. — Когда я пришёл, он спал.<br>
      Yemek yerken konuşma. — Не разговаривай во время еды (пока ешь).</p>
      <p>-ken присоединяется к основе для одновременности процесса, -DIğIndA — более нейтральное «в момент, когда».</p>`}
  ],
  nuances:[
    '-Ip не несёт собственного лица и времени — все грамматические показатели «переезжают» на финальный глагол цепочки, поэтому нельзя сказать *kalkıpım.',
    '-ken присоединяется без личных аффиксов и без -DIk — это застывшая деепричастная форма: она добавляется прямо к геniş zaman основе (gel-ir-ken, а не gel-di-ken).'
  ],
  examples:[
    {tr:'Duş alıp yattım.', ru:'Я принял душ и лёг спать.'},
    {tr:'Koşarak geldi.', ru:'Он прибежал (пришёл бегом).'},
    {tr:'Sormadan alma.', ru:'Не бери, не спросив.'},
    {tr:'Eve varınca beni ara.', ru:'Как приедешь домой, позвони мне.'},
    {tr:'Ben çalışırken müzik dinlerim.', ru:'Когда я работаю, я слушаю музыку.'}
  ],
  exercises:[
    {type:'choice', q:'«Не выключив свет, он ушёл» — ışığı ___ çıktı (kapat- — выключать)', options:['kapatıp','kapatarak','kapatmadan','kapatınca'], answer:2, explain:'«не сделав» = -mEdEn: kapatmadan.'},
    {type:'choice', q:'«Он ответил, улыбаясь» — gülümse___ cevap verdi', options:['yerek','yip','yince','yeceğinde'], answer:0, explain:'Образ действия/одновременность = -ArAk: gülümseyerek.'},
    {type:'fill', q:'Впишите деепричастие: «Как только увидел меня, убежал» — Beni gör___ kaçtı.', answer:['ünce','ünce.'], explain:'gör + ünce (гармония по ö/ü): görünce.'},
  ]
},

// ===================== LESSON 15 =====================
{
  id:15, level:'advanced',
  title:'Условное наклонение и модальность долженствования',
  subtitle:'«Если» (-sA), «нужно» (-mAlI) — как строить условия и обязанность.',
  theory:[
    {h:'Условное наклонение (şart kipi) — -sA', html:`
      <p>Аффикс <span class="suffix">-sA</span> (2 варианта: -sa/-se) присоединяется к основе глагола
      и принимает обычные личные аффиксы:</p>
      <p class="tr">Param olsa, seyahat ederim. — Если бы у меня были деньги, я бы путешествовал.<br>
      Yağmur yağarsa, gelmem. — Если пойдёт дождь, я не приду.</p>
      <p>-sA также присоединяется к именному сказуемому через -(y)sA: <span class="tr">Zengin olsam…</span>
      — Если бы я был богат…</p>`},
    {h:'Реальное vs нереальное условие', html:`
      <p>Турецкий не различает грамматически «реальное» и «нереальное» условие так чётко, как русский:
      и «если пойдёт дождь» и «если бы у меня были деньги» строятся одной и той же формой -sA — различие
      передаётся контекстом и модальными словами (keşke — «эх, если бы»).</p>`},
    {h:'Долженствование -mAlI / -mElI — «должен, нужно»', html:`
      <p class="tr">Erken kalkmalıyım. — Я должен встать рано.<br>
      Bu ilacı içmeli misin? — Тебе нужно принимать это лекарство?</p>
      <p>Отрицание чаще выражается через <span class="tr">değil</span>: <span class="tr">Gitmeli değilsin</span>
      — Тебе не нужно идти (=необязательно), в отличие от <span class="tr">gitmemelisin</span> — тебе нельзя идти
      (=запрет).</p>`}
  ],
  nuances:[
    'keşke + -sA передаёт сожаление о нереализованном: Keşke gelseydin — Жаль, что ты не пришёл (досл. «эх, если бы ты пришёл»).',
    '-mAlI выражает субъективную необходимость/совет (стоит, следует), а не жёсткий закон — для строгого запрета используется другое отрицание (gitmemelisin), для «необязательно» — конструкция с değil.'
  ],
  examples:[
    {tr:'Vaktin olursa bana yardım eder misin?', ru:'Если у тебя будет время, поможешь мне?'},
    {tr:'Keşke daha çok zamanımız olsa.', ru:'Эх, если бы у нас было больше времени.'},
    {tr:'Doktora gitmelisin.', ru:'Тебе нужно сходить к врачу.'},
    {tr:'Bu konuda dikkatli olmalıyız.', ru:'В этом вопросе нам нужно быть внимательными.'},
    {tr:'Erken çıkarsak trafiğe yakalanmayız.', ru:'Если мы выйдем рано, не попадём в пробку.'}
  ],
  exercises:[
    {type:'choice', q:'«Если завтра будет солнечно, пойдём на пляж» — Yarın hava güneşli ___, plaja gideriz.', options:['olsa','olursa','olacaksa','oldu'], answer:1, explain:'Реальное условие в будущем: geniş zaman основа + -sa: olursa.'},
    {type:'choice', q:'«Тебе не обязательно приходить» (необязательность, а не запрет):', options:['Gelmemelisin','Gelmeli değilsin','Gelme!','Gelmeyeceksin'], answer:1, explain:'Необязательность передаётся через değil: gelmeli değilsin, тогда как gelmemelisin — это запрет («тебе нельзя приходить»).'},
    {type:'fill', q:'Впишите полностью условную форму глагола iste- (хотеть) для «ты»: «если ты хочешь» —', answer:['istersen','istersen.'], explain:'iste + r (geniş zaman) + se + n = istersen — «если хочешь».'},
  ]
},

// ===================== LESSON 16 =====================
{
  id:16, level:'advanced',
  title:'Залоги: страдательный, побудительный, возвратный, взаимный',
  subtitle:'Четыре аффикса, которые меняют отношения между подлежащим и действием.',
  theory:[
    {h:'Страдательный залог (edilgen çatı) — -Il / -In', html:`
      <p>Аффикс <span class="suffix">-Il</span> (после согласных, кроме l) или <span class="suffix">-In</span>
      (после гласных и l) убирает исполнителя действия на второй план — подлежащим становится объект:</p>
      <p class="tr">Kapı kapatıldı. — Дверь была закрыта.<br>Bu kitap çok okunuyor. — Эту книгу много читают.</p>`},
    {h:'Побудительный залог / каузатив (ettirgen çatı) — -DIr / -t / -Ir и др.', html:`
      <p>Показывает, что подлежащее не делает действие само, а поручает/заставляет его сделать кого-то другого.
      Выбор конкретного аффикса (их несколько: -dır/-tır, -t, -ır/-ir, -it) зависит от структуры основы
      и частично лексикализован:</p>
      <p class="tr">Çocuğa mektup yazdırdım. — Я заставил/попросил ребёнка написать письмо.<br>
      Saçımı kestirdim. — Я постригся (досл. «заставил постричь мои волосы» — у парикмахера).</p>`},
    {h:'Возвратный залог (dönüşlü çatı) — -In', html:`
      <p>Действие направлено на самого исполнителя (аналог «-ся» в «мыться, одеваться»):</p>
      <p class="tr">Sabah erken yıkandım. — Утром я рано помылся.<br>Çocuk kendi kendine giyindi. — Ребёнок сам оделся.</p>`},
    {h:'Взаимный залог (işteş çatı) — -Iş', html:`
      <p>Показывает совместное или взаимное действие (аналог «друг друга», «пере-»):</p>
      <p class="tr">Uzun zamandır görüşmedik. — Мы давно не виделись (друг с другом).<br>
      Mektuplaştık. — Мы переписывались.</p>`}
  ],
  nuances:[
    'Один и тот же формальный аффикс -In обслуживает и страдательный, и возвратный залог — различать их нужно по смыслу и по тому, называется ли исполнитель действия (при страдательном он либо не называется, либо вводится через tarafından — «кем-то»).',
    'Побудительный залог можно накладывать «слоями»: giy- (одевать) → giydir- (одевать кого-то) → giydirt- (заставить кого-то одеть кого-то) — цепочки из двух каузативов редки, но грамматически возможны.'
  ],
  examples:[
    {tr:'Bu ev 1950\'de yapılmış.', ru:'Этот дом был построен в 1950 году (по сведениям).'},
    {tr:'Anneme yemeği pişirttim.', ru:'Я попросил маму приготовить еду.'},
    {tr:'Her sabah traş oluyorum.', ru:'Я бреюсь каждое утро.'},
    {tr:'Yıllar sonra tekrar buluştuk.', ru:'Спустя годы мы снова встретились.'},
    {tr:'Bu haber herkese duyuruldu.', ru:'Эта новость была объявлена всем.'}
  ],
  exercises:[
    {type:'choice', q:'«Письмо было отправлено» (gönder-):', options:['Mektup gönderdi','Mektup gönderildi','Mektup gönderiyor','Mektup göndersin'], answer:1, explain:'Страдательный залог: gönder+il+di = gönderildi.'},
    {type:'choice', q:'«Я постриг ребёнка (=отвёл постричься/заставил постричь)» — çocuğu (saç kestir-):', options:['Çocuğu kestim','Çocuğu kestirdim','Çocuk kesildi','Çocuk kesişti'], answer:1, explain:'Побудительный залог: kes+tir+dim — я организовал, чтобы ребёнка постригли.'},
    {type:'fill', q:'Впишите полную форму взаимного залога от gör- (видеть) для «мы»: «мы виделись» (друг с другом) —', answer:['görüştük','görüştük.'], explain:'Взаимный залог -Iş + прошедшее время: gör+üş+tük → görüştük (после глухой ş ставится глухой вариант -tük, а не -dük).'},
  ]
},

];
