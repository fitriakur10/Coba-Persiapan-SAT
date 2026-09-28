/* =========================================================================
   SAT PREP — DATABASE MATERI & SOAL
   Kelas 8 s/d Kelas 10 (Dasar -> Menengah -> Siap SAT)
   Struktur:
   SAT_DB.levels[] = { id, name, tagline, color, subjects[] }
   subject       = { id, name, materi[] }
   materi        = { id, judul, ringkasan, soal[] }
   soal          = { q, o[4], a(index jawaban benar), e(pembahasan) }
   SAT_DB.tryout[] = { id, levelId, judul, durasiMenit, soal[] (soal punya field `tag`: 'Matematika' / 'Reading & Writing') }
   Konten dibuat khusus untuk keperluan belajar pribadi non-komersial.
   ========================================================================= */
window.SAT_DB = {
  levels: [
    {
      id: "k8",
      name: "Kelas 8",
      tagline: "Fondasi — bangun dasar berhitung, aljabar, dan bahasa Inggris.",
      color: "#2D9596",
      subjects: [
        {
          id: "math8",
          name: "Matematika",
          materi: [
            {
              id: "m8-1",
              judul: "Operasi Bilangan & Pecahan",
              ringkasan: "Operasi hitung campuran, pecahan, desimal, dan pangkat.",
              soal: [
                { q: "3/4 + 1/6 = ?", o: ["11/12", "5/6", "4/5", "7/8"], a: 0, e: "Samakan penyebut menjadi 12: 9/12 + 2/12 = 11/12." },
                { q: "-8 + 5 × (-2) = ?", o: ["-18", "-26", "-6", "18"], a: 0, e: "Perkalian dikerjakan dulu: 5 × (-2) = -10, lalu -8 + (-10) = -18." },
                { q: "Bentuk desimal dari 5/8 adalah?", o: ["0,625", "0,58", "0,685", "0,65"], a: 0, e: "5 ÷ 8 = 0,625." },
                { q: "Hasil dari 2³ × 2² = ?", o: ["32", "16", "64", "10"], a: 0, e: "Basis sama, pangkat dijumlahkan: 2^(3+2) = 2^5 = 32." }
              ]
            },
            {
              id: "m8-2",
              judul: "Aljabar Dasar (Persamaan Linear Satu Variabel)",
              ringkasan: "Menyelesaikan persamaan linear sederhana dan menyederhanakan bentuk aljabar.",
              soal: [
                { q: "Selesaikan: 2x + 5 = 17. Nilai x = ?", o: ["6", "5", "7", "11"], a: 0, e: "2x = 12, sehingga x = 6." },
                { q: "Jika 3(x - 2) = 15, maka x = ?", o: ["7", "5", "9", "6"], a: 0, e: "3x - 6 = 15 → 3x = 21 → x = 7." },
                { q: "Nilai x yang memenuhi (x/4) + 3 = 7 adalah?", o: ["16", "4", "28", "1"], a: 0, e: "x/4 = 4, sehingga x = 16." },
                { q: "Bentuk sederhana dari 4x + 3x - 2x adalah?", o: ["5x", "9x", "x", "6x"], a: 0, e: "4x + 3x - 2x = 5x." }
              ]
            },
            {
              id: "m8-3",
              judul: "Rasio, Proporsi & Persen",
              ringkasan: "Perbandingan senilai, persentase, diskon, dan skala.",
              soal: [
                { q: "Perbandingan uang Adi:Budi = 3:5. Jika uang Adi Rp90.000, uang Budi adalah?", o: ["Rp150.000", "Rp120.000", "Rp135.000", "Rp100.000"], a: 0, e: "90.000 ÷ 3 × 5 = Rp150.000." },
                { q: "25% dari 240 adalah?", o: ["60", "50", "65", "70"], a: 0, e: "240 × 0,25 = 60." },
                { q: "Harga baju Rp200.000 didiskon 15%. Harga setelah diskon?", o: ["Rp170.000", "Rp165.000", "Rp180.000", "Rp150.000"], a: 0, e: "200.000 × (1 - 0,15) = Rp170.000." },
                { q: "Skala peta 1:500.000, jarak pada peta 4 cm. Jarak sebenarnya?", o: ["20 km", "2 km", "200 km", "50 km"], a: 0, e: "4 × 500.000 cm = 2.000.000 cm = 20 km." }
              ]
            }
          ]
        },
        {
          id: "rw8",
          name: "Reading & Writing",
          materi: [
            {
              id: "r8-1",
              judul: "Grammar Dasar",
              ringkasan: "Subject-verb agreement, bentuk jamak, dan tanda baca dasar.",
              soal: [
                { q: 'Choose the correct verb: "She ___ to school every day."', o: ["walk", "walks", "walking", "walked"], a: 1, e: 'Subjek tunggal "she" memakai kata kerja +s dalam simple present: walks.' },
                { q: "Which sentence is correct?", o: ["He don't like coffee.", "He doesn't like coffee.", "He not like coffee.", "He do not likes coffee."], a: 1, e: 'Subjek tunggal "he" memerlukan "doesn\'t" dalam bentuk negatif simple present.' },
                { q: 'Choose the correct plural: "There are three ___ on the table."', o: ["box", "boxes", "boxs", "boxxes"], a: 1, e: "Kata benda berakhiran -x membentuk jamak dengan -es: boxes." },
                { q: "Select the correctly punctuated sentence:", o: ["I like apples oranges and grapes", "I like apples, oranges and grapes.", "I like, apples oranges and grapes", "I like apples oranges, and, grapes."], a: 1, e: "Koma digunakan untuk memisahkan unsur dalam daftar (list)." }
              ]
            },
            {
              id: "r8-2",
              judul: "Kosakata dalam Konteks",
              ringkasan: "Menebak makna kata dari konteks kalimat (vocabulary in context).",
              soal: [
                { q: 'The scientist\'s hypothesis was later ___ by experimental data. (kata yang berarti "didukung")', o: ["refuted", "corroborated", "dismissed", "ignored"], a: 1, e: '"Corroborated" berarti dikuatkan/didukung oleh bukti.' },
                { q: 'Word closest in meaning to "abundant":', o: ["scarce", "plentiful", "empty", "hidden"], a: 1, e: '"Abundant" berarti berlimpah, sinonimnya "plentiful".' },
                { q: 'Despite the ___ weather, the hikers continued their journey. (kata yang berarti "buruk/tidak bersahabat")', o: ["pleasant", "inclement", "calm", "mild"], a: 1, e: '"Inclement" berarti cuaca buruk, cocok dengan konteks "despite".' },
                { q: 'Synonym for "meticulous":', o: ["careless", "careful", "quick", "lazy"], a: 1, e: '"Meticulous" berarti sangat teliti, sinonim dari "careful".' }
              ]
            },
            {
              id: "r8-3",
              judul: "Ide Pokok Bacaan",
              ringkasan: "Menemukan main idea dari paragraf pendek.",
              soal: [
                { q: 'Passage: "Many students find that reviewing small amounts of material each day is more effective than studying everything the night before a test. This method, often called spaced repetition, helps information move into long-term memory." Apa ide pokok bacaan ini?', o: ["Studying only before a test is the best method", "Spaced repetition helps retain information better than cramming", "Long-term memory is impossible to achieve", "Students should avoid studying daily"], a: 1, e: "Paragraf menekankan manfaat belajar sedikit-sedikit (spaced repetition) dibanding sistem kebut semalam." },
                { q: 'Passage: "The city council decided to add more bicycle lanes after research showed that cycling reduced traffic congestion and pollution." Mengapa kota menambah jalur sepeda?', o: ["To increase traffic congestion", "Because cycling reduces congestion and pollution", "To reduce the number of cars sold", "Because residents opposed it"], a: 1, e: "Alasan disebutkan langsung: bersepeda mengurangi kemacetan dan polusi." },
                { q: 'Passage: "Although solar panels require a large initial investment, they can significantly lower electricity bills over time." Apa manfaat panel surya menurut bacaan?', o: ["They have no upfront cost", "They lower electricity bills over time", "They increase fossil fuel use", "They are illegal in most places"], a: 1, e: "Bacaan menyebut manfaat jangka panjang: menurunkan tagihan listrik." },
                { q: 'Passage: "Reading fiction has been shown to improve empathy, as it allows readers to experience the perspectives of characters unlike themselves." Apa yang ditingkatkan oleh membaca fiksi?', o: ["Mathematical skills", "Empathy", "Physical fitness", "Memory loss"], a: 1, e: 'Kalimat pertama langsung menyatakan "improve empathy".' }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "k9",
      name: "Kelas 9",
      tagline: "Menengah — perkuat sistem persamaan, fungsi, dan analisis bacaan.",
      color: "#3D5A9E",
      subjects: [
        {
          id: "math9",
          name: "Matematika",
          materi: [
            {
              id: "m9-1",
              judul: "Sistem Persamaan Linear Dua Variabel",
              ringkasan: "Metode eliminasi & substitusi untuk dua persamaan linear.",
              soal: [
                { q: "Selesaikan sistem: x + y = 10, x - y = 2. Nilai x = ?", o: ["6", "4", "8", "2"], a: 0, e: "Jumlahkan kedua persamaan: 2x = 12 → x = 6." },
                { q: "Dari sistem 2x + y = 8 dan x = 3, nilai y adalah?", o: ["2", "3", "4", "1"], a: 0, e: "2(3) + y = 8 → y = 2." },
                { q: "Titik potong garis y = 2x + 1 dan y = -x + 4 terjadi pada x = ?", o: ["1", "2", "3", "0"], a: 0, e: "2x + 1 = -x + 4 → 3x = 3 → x = 1." },
                { q: "Jika 3x - 2y = 6 dan y = 0, maka x = ?", o: ["2", "3", "1", "4"], a: 0, e: "3x = 6 → x = 2." }
              ]
            },
            {
              id: "m9-2",
              judul: "Fungsi Linear & Grafik",
              ringkasan: "Gradien, persamaan garis, dan nilai fungsi.",
              soal: [
                { q: "Gradien garis y = 3x - 5 adalah?", o: ["3", "-5", "5", "-3"], a: 0, e: "Bentuk y = mx + c, gradien m = 3." },
                { q: "Garis melalui (0,4) dan (2,10). Gradiennya?", o: ["3", "6", "2", "4"], a: 0, e: "m = (10-4)/(2-0) = 6/2 = 3." },
                { q: "Fungsi f(x) = 2x + 1, nilai f(3) = ?", o: ["7", "6", "5", "8"], a: 0, e: "f(3) = 2(3) + 1 = 7." },
                { q: "Garis yang sejajar dengan y = 4x + 2 memiliki gradien?", o: ["4", "2", "-4", "1/4"], a: 0, e: "Garis sejajar memiliki gradien yang sama, yaitu 4." }
              ]
            },
            {
              id: "m9-3",
              judul: "Geometri: Pythagoras & Sudut",
              ringkasan: "Teorema Pythagoras dan hubungan sudut pada segitiga.",
              soal: [
                { q: "Segitiga siku-siku dengan kaki 6 dan 8, sisi miringnya adalah?", o: ["10", "12", "14", "9"], a: 0, e: "√(6² + 8²) = √(36+64) = √100 = 10." },
                { q: "Jumlah sudut dalam segitiga adalah?", o: ["180°", "360°", "90°", "270°"], a: 0, e: "Sifat dasar segitiga: jumlah sudut dalam = 180°." },
                { q: "Segitiga siku-siku memiliki sudut 90° dan 35°. Sudut ketiga adalah?", o: ["55°", "45°", "65°", "50°"], a: 0, e: "180° - 90° - 35° = 55°." },
                { q: "Panjang diagonal persegi dengan sisi 5 cm adalah?", o: ["5√2 cm", "10 cm", "25 cm", "5 cm"], a: 0, e: "Diagonal = sisi × √2 = 5√2 cm." }
              ]
            }
          ]
        },
        {
          id: "rw9",
          name: "Reading & Writing",
          materi: [
            {
              id: "r9-1",
              judul: "Tanda Baca & Struktur Kalimat",
              ringkasan: "Koma, titik koma, dan klausa non-restriktif.",
              soal: [
                { q: "Choose the correct sentence:", o: ["My brother, who lives in Jakarta works as an engineer.", "My brother, who lives in Jakarta, works as an engineer.", "My brother who lives, in Jakarta works as an engineer.", "My brother who lives in Jakarta, works, as an engineer."], a: 1, e: "Klausa keterangan non-restriktif diapit dua koma." },
                { q: "Select correct semicolon usage:", o: ["I finished my homework; then I watched a movie.", "I finished my homework, then; I watched a movie.", "I finished my homework; then, I watched a movie", "I finished; my homework then I watched a movie."], a: 0, e: "Titik koma menghubungkan dua klausa independen yang berkaitan." },
                { q: "Correct comma placement:", o: ["After the rain stopped we went outside.", "After the rain stopped, we went outside.", "After, the rain stopped we went outside.", "After the rain, stopped we went outside."], a: 1, e: "Gunakan koma setelah klausa keterangan yang mendahului klausa utama." },
                { q: "Choose the sentence with correct subject-verb agreement:", o: ["The list of items are on the table.", "The list of items is on the table.", "The list of item is on the table.", "The lists of items is on the table."], a: 1, e: 'Subjek adalah "the list" (tunggal), bukan "items".' }
              ]
            },
            {
              id: "r9-2",
              judul: "Bukti dalam Bacaan (Command of Evidence)",
              ringkasan: "Menemukan detail yang mendukung sebuah klaim dalam teks.",
              soal: [
                { q: 'Passage: "Community gardens not only provide fresh produce but also strengthen neighborhood ties, as residents work together and share knowledge." Detail mana yang mendukung ide bahwa kebun memperkuat komunitas?', o: ["Gardens provide fresh produce", "Residents work together and share knowledge", "Gardens are popular in cities", "Studies were conducted"], a: 1, e: "Kalimat itu langsung menyebut kerja sama antarwarga sebagai bukti penguatan komunitas." },
                { q: 'Passage: "Electric vehicles produce zero tailpipe emissions, but manufacturing their batteries requires significant energy and rare minerals." Bukti apa yang mempersulit klaim EV sepenuhnya ramah lingkungan?', o: ["They produce zero tailpipe emissions", "Battery manufacturing requires energy and rare minerals", "They are popular with consumers", "They are expensive"], a: 1, e: "Kalimat kedua menjadi bukti penyeimbang (counter-evidence)." },
                { q: 'Passage: "The exhibit uses interactive displays, resulting in longer average visit times and increased ticket sales." Bukti keberhasilan pameran adalah?', o: ["The exhibit uses interactive displays", "Longer visit times and increased ticket sales", "The museum is old", "Visitors complained"], a: 1, e: "Hasil terukur (visit time & ticket sales) adalah bukti keberhasilan." },
                { q: 'Passage: "Students who took short breaks during study sessions retained more information than those who studied continuously." Apa yang disarankan oleh bukti riset ini?', o: ["Continuous studying is more effective", "Short breaks improve retention", "Breaks have no effect", "Longer study sessions are always better"], a: 1, e: "Data menunjukkan retensi lebih tinggi pada kelompok yang beristirahat." }
              ]
            },
            {
              id: "r9-3",
              judul: "Menulis Efektif: Transisi & Kejelasan",
              ringkasan: "Memilih kata transisi yang tepat dan kalimat paling ringkas.",
              soal: [
                { q: 'Choose the best transition: "The experiment failed twice. ___, the team decided to try a new approach."', o: ["Therefore", "However", "Similarly", "For example"], a: 0, e: '"Therefore" menunjukkan akibat logis dari kegagalan.' },
                { q: 'Choose the best transition: "She studied hard for the exam. ___, she felt confident on test day."', o: ["In contrast", "As a result", "Meanwhile", "On the other hand"], a: 1, e: '"As a result" menghubungkan sebab (belajar keras) dengan akibat (percaya diri).' },
                { q: "Which sentence is clearest and most concise?", o: ["Due to the fact that it was raining, we stayed inside.", "Because it was raining, we stayed inside.", "Owing to the fact of the rain occurring, we remained inside the house.", "It being the case that it rained, we stayed inside."], a: 1, e: '"Because" lebih ringkas daripada frasa bertele-tele seperti "due to the fact that".' },
                { q: 'Choose the best transition: "The company\'s profits increased this quarter. ___, they plan to hire more employees."', o: ["Consequently", "Nevertheless", "In spite of this", "Conversely"], a: 0, e: '"Consequently" menandakan akibat langsung dari peningkatan laba.' }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "k10",
      name: "Kelas 10",
      tagline: "Siap SAT — fungsi kuadrat, statistika, dan penalaran bacaan tingkat lanjut.",
      color: "#E4972E",
      subjects: [
        {
          id: "math10",
          name: "Matematika",
          materi: [
            {
              id: "m10-1",
              judul: "Persamaan & Fungsi Kuadrat",
              ringkasan: "Faktorisasi, titik puncak, dan diskriminan.",
              soal: [
                { q: "Akar-akar dari x² - 5x + 6 = 0 adalah?", o: ["2 dan 3", "1 dan 6", "-2 dan -3", "2 dan -3"], a: 0, e: "Faktorkan: (x-2)(x-3)=0 → x = 2 atau x = 3." },
                { q: "Titik puncak dari y = x² - 4x + 3 adalah?", o: ["(2, -1)", "(2, 1)", "(-2, -1)", "(4, 3)"], a: 0, e: "x puncak = -b/2a = 2, y = 2²-4(2)+3 = -1." },
                { q: "Diskriminan dari 2x² + 3x + 5 = 0 adalah?", o: ["-31 (tidak ada akar real)", "31", "9", "-9"], a: 0, e: "D = b²-4ac = 9 - 40 = -31, karena negatif tidak ada akar real." },
                { q: "Bentuk faktor dari x² - 9 adalah?", o: ["(x-3)(x+3)", "(x-9)(x+1)", "(x+9)(x-1)", "(x-3)²"], a: 0, e: "Selisih dua kuadrat: a²-b² = (a-b)(a+b)." }
              ]
            },
            {
              id: "m10-2",
              judul: "Statistika & Probabilitas",
              ringkasan: "Mean, median, dan peluang kejadian sederhana.",
              soal: [
                { q: "Data: 4, 6, 6, 8, 10. Median-nya adalah?", o: ["6", "7", "8", "4"], a: 0, e: "Data sudah urut, nilai tengah (ke-3) adalah 6." },
                { q: "Data: 2, 3, 5, 7, 8. Rata-rata (mean)?", o: ["5", "6", "4", "7"], a: 0, e: "Jumlah = 25, dibagi 5 data = 5." },
                { q: "Sebuah dadu dilempar sekali. Peluang muncul angka genap adalah?", o: ["1/2", "1/3", "1/6", "2/3"], a: 0, e: "Angka genap: 2,4,6 → 3/6 = 1/2." },
                { q: "Dalam kotak ada 4 bola merah dan 6 bola biru. Peluang terambil bola merah?", o: ["2/5", "1/2", "3/5", "1/5"], a: 0, e: "4 dari total 10 bola = 4/10 = 2/5." }
              ]
            },
            {
              id: "m10-3",
              judul: "Trigonometri & Geometri Lanjutan",
              ringkasan: "Nilai sin/cos sudut istimewa dan keliling lingkaran.",
              soal: [
                { q: "Nilai sin 30° adalah?", o: ["1/2", "√2/2", "√3/2", "1"], a: 0, e: "Nilai sudut istimewa: sin 30° = 1/2." },
                { q: "Nilai cos 60° adalah?", o: ["1/2", "√3/2", "0", "1"], a: 0, e: "Nilai sudut istimewa: cos 60° = 1/2." },
                { q: "Pada segitiga siku-siku, sisi depan = 3 dan sisi miring = 5. Nilai sin sudut tersebut?", o: ["3/5", "4/5", "5/3", "3/4"], a: 0, e: "sin = depan/miring = 3/5." },
                { q: "Keliling lingkaran dengan jari-jari 7 cm (π ≈ 22/7) adalah?", o: ["44 cm", "22 cm", "154 cm", "49 cm"], a: 0, e: "Keliling = 2πr = 2 × 22/7 × 7 = 44 cm." }
              ]
            }
          ]
        },
        {
          id: "rw10",
          name: "Reading & Writing",
          materi: [
            {
              id: "r10-1",
              judul: "Grammar Lanjutan: Modifier & Paralelisme",
              ringkasan: "Dangling modifier dan struktur paralel gaya SAT.",
              soal: [
                { q: "Choose the sentence free of dangling modifiers:", o: ["Walking to school, the rain started falling.", "Walking to school, I got caught in the rain.", "The rain, walking to school, started falling.", "Started falling, walking to school, the rain."], a: 1, e: 'Frasa "walking to school" harus menerangkan subjek pelaku, yaitu "I".' },
                { q: "Choose the sentence with correct parallel structure:", o: ["She likes reading, to write, and painting.", "She likes reading, writing, and painting.", "She likes to read, writing, and to paint.", "She likes read, write, and paint."], a: 1, e: "Semua item dalam daftar harus berbentuk sama (gerund): reading, writing, painting." },
                { q: "Choose the sentence with correctly placed modifier (maksud: hampir semua PR selesai):", o: ["The students finished nearly all the homework.", "Nearly the students finished all the homework.", "The nearly students finished all homework.", "All nearly the students finished homework."], a: 0, e: '"Nearly" harus berada tepat sebelum kata yang diterangkannya, yaitu "all the homework".' },
                { q: "Choose the correctly parallel sentence:", o: ["The manager not only praised the team but also gave them a bonus.", "The manager not only praised the team but also giving them a bonus.", "The manager not only praised the team but also to give them a bonus.", "The manager not only praising the team but also gave them a bonus."], a: 0, e: 'Struktur "not only...but also" menghubungkan dua kata kerja berbentuk sama: praised...gave.' }
              ]
            },
            {
              id: "r10-2",
              judul: "Analisis Bacaan Ganda & Inferensi",
              ringkasan: "Membandingkan dua sudut pandang dan menyimpulkan makna tersirat.",
              soal: [
                { q: 'Passage A: "Raising the minimum wage helps low-income workers afford necessities." Passage B: "A higher minimum wage could lead employers to reduce hiring, harming those workers." Bagaimana hubungan Passage B dengan Passage A?', o: ["It supports the claim in Passage A", "It presents a counterargument to Passage A", "It repeats Passage A's argument", "It is unrelated to Passage A"], a: 1, e: "Passage B menyajikan risiko yang berlawanan dengan klaim di Passage A." },
                { q: 'Passage: "The protagonist rarely speaks about her past, yet small details—an old photograph, a hesitant smile—hint at a difficult childhood." Apa yang dapat disimpulkan tentang tokoh utama?', o: ["She has a simple, uneventful past", "She has experienced hardship in her past", "She has no family", "She dislikes photographs"], a: 1, e: 'Detail-detail kecil "hint at a difficult childhood" mengarahkan pada masa lalu yang sulit.' },
                { q: 'Passage: "Despite record rainfall this year, the region\'s reservoirs remain below average, puzzling local officials." Apa yang tersirat dari bacaan ini?', o: ["The rainfall directly filled the reservoirs as expected", "Something other than rainfall is affecting reservoir levels", "The region has too much water", "Officials are not concerned"], a: 1, e: "Kata 'puzzling' menandakan ada faktor lain yang tidak sesuai ekspektasi normal (curah hujan tinggi tapi reservoir tetap rendah)." },
                { q: 'Passage: "The author uses vivid imagery of decaying buildings and empty streets throughout the chapter." Nada (tone) apa yang paling mungkin ditimbulkan?', o: ["Cheerful and lively", "Bleak and desolate", "Humorous", "Romantic"], a: 1, e: 'Citraan "decaying buildings" dan "empty streets" menciptakan kesan suram/desolate.' }
              ]
            },
            {
              id: "r10-3",
              judul: "Sintesis Data dalam Teks (Grafik + Teks)",
              ringkasan: "Menarik kesimpulan dari data numerik yang disajikan dalam teks.",
              soal: [
                { q: "Survei: 40% responden lebih suka kelas daring, 35% tatap muka, 25% tidak punya preferensi. Kesimpulan yang paling didukung data?", o: ["Most respondents prefer in-person classes", "Online classes are the most preferred single option", "No respondents like classes", "In-person and online are equally preferred"], a: 1, e: "40% adalah proporsi tunggal tertinggi dibanding opsi lain." },
                { q: "Data pendapatan perusahaan: 2021: $2M, 2022: $2,5M, 2023: $3,2M. Tren apa yang ditunjukkan?", o: ["Revenue decreased each year", "Revenue increased each year", "Revenue stayed the same", "Revenue fluctuated randomly"], a: 1, e: "Angka naik terus tiap tahun: 2M → 2,5M → 3,2M." },
                { q: "60% siswa yang belajar dengan flashcard mendapat skor di atas rata-rata, dibanding 30% yang membaca ulang catatan. Pernyataan yang paling didukung data?", o: ["Rereading notes is more effective than flashcards", "Flashcards are associated with higher scores in this data", "Studying has no effect on scores", "All students who used flashcards scored perfectly"], a: 1, e: "Data menunjukkan asosiasi (bukan pasti sebab-akibat) antara flashcard dan skor lebih tinggi." },
                { q: "Tabel suhu naik dari 20°C (Januari) menjadi 30°C (Juni). Kesimpulan yang tepat?", o: ["Temperature decreased from January to June", "Temperature generally rose from January to June", "Temperature remained constant", "No data was given for June"], a: 1, e: "Data menunjukkan kenaikan suhu dari Januari ke Juni." }
              ]
            }
          ]
        }
      ]
    }
  ],

  tryout: [
    {
      id: "to-k8",
      levelId: "k8",
      judul: "Try Out Simulasi SAT — Level Kelas 8",
      durasiMenit: 20,
      soal: [
        { tag: "Matematika", q: "15% dari 80 adalah?", o: ["12", "10", "15", "8"], a: 0, e: "80 × 0,15 = 12." },
        { tag: "Matematika", q: "3x = 21, nilai x = ?", o: ["7", "6", "8", "9"], a: 0, e: "x = 21 ÷ 3 = 7." },
        { tag: "Matematika", q: "Perbandingan 2:3, jika bagian pertama = 10, bagian kedua = ?", o: ["15", "12", "20", "18"], a: 0, e: "10 ÷ 2 × 3 = 15." },
        { tag: "Matematika", q: "Keliling persegi dengan sisi 9 cm adalah?", o: ["36 cm", "18 cm", "81 cm", "45 cm"], a: 0, e: "Keliling = 4 × sisi = 4 × 9 = 36 cm." },
        { tag: "Matematika", q: "5² - 3² = ?", o: ["16", "4", "34", "64"], a: 0, e: "25 - 9 = 16." },
        { tag: "Matematika", q: "Bentuk pecahan dari 0,75 adalah?", o: ["3/4", "7/5", "3/5", "7/4"], a: 0, e: "0,75 = 75/100 = 3/4." },
        { tag: "Reading & Writing", q: 'Choose the correct verb: "They ___ playing football now."', o: ["is", "are", "am", "be"], a: 1, e: 'Subjek jamak "they" memakai "are".' },
        { tag: "Reading & Writing", q: 'Synonym of "happy":', o: ["sad", "joyful", "angry", "tired"], a: 1, e: '"Joyful" bermakna sama dengan "happy".' },
        { tag: "Reading & Writing", q: 'Passage: "Regular exercise improves both physical and mental health." Apa ide pokoknya?', o: ["Exercise only helps physical health", "Exercise benefits physical and mental health", "Exercise is unnecessary", "Exercise harms mental health"], a: 1, e: "Kalimat menyebutkan manfaat ganda: fisik dan mental." },
        { tag: "Reading & Writing", q: "Choose the correctly punctuated sentence:", o: ["Lets eat, Grandma.", "Let's eat, Grandma.", "Lets eat Grandma.", "Let's eat Grandma."], a: 1, e: "Perlu apostrof (Let's) dan koma sebelum kata sapaan (Grandma) agar maknanya benar." }
      ]
    },
    {
      id: "to-k9",
      levelId: "k9",
      judul: "Try Out Simulasi SAT — Level Kelas 9",
      durasiMenit: 25,
      soal: [
        { tag: "Matematika", q: "Sistem x + y = 7, x - y = 1. Nilai x = ?", o: ["4", "3", "5", "2"], a: 0, e: "Jumlahkan: 2x = 8 → x = 4." },
        { tag: "Matematika", q: "Gradien garis melalui (1,2) dan (3,6)?", o: ["2", "4", "1", "3"], a: 0, e: "m = (6-2)/(3-1) = 4/2 = 2." },
        { tag: "Matematika", q: "f(x) = 3x - 4, nilai f(2) = ?", o: ["2", "6", "-2", "10"], a: 0, e: "f(2) = 3(2)-4 = 2." },
        { tag: "Matematika", q: "Segitiga siku-siku dengan kaki 9 dan 12. Hipotenusanya?", o: ["15", "21", "13", "18"], a: 0, e: "√(81+144) = √225 = 15." },
        { tag: "Matematika", q: "Rata-rata dari 5, 7, 9, 11 adalah?", o: ["8", "7", "9", "10"], a: 0, e: "Jumlah 32 ÷ 4 = 8." },
        { tag: "Matematika", q: "Sudut pelurus dari 65° adalah?", o: ["115°", "25°", "180°", "90°"], a: 0, e: "180° - 65° = 115°." },
        { tag: "Reading & Writing", q: "Choose the correct sentence:", o: ["My sister, who lives in Bali love the beach.", "My sister, who lives in Bali, loves the beach.", "My sister who lives, in Bali loves the beach.", "My sister who, lives in Bali loves the beach."], a: 1, e: "Klausa non-restriktif diapit koma, dan kata kerja mengikuti subjek tunggal 'my sister'." },
        { tag: "Reading & Writing", q: 'Best transition: "It rained all day. ___, the match was cancelled."', o: ["However", "As a result", "Similarly", "For instance"], a: 1, e: "Hubungan sebab-akibat, gunakan 'as a result'." },
        { tag: "Reading & Writing", q: 'Passage: "The bridge was closed for repairs, causing traffic delays across the city." Bukti penyebab kemacetan?', o: ["The city built a new bridge", "The bridge closure caused delays", "There was no bridge", "Traffic was already bad before"], a: 1, e: "Kalimat menyatakan penutupan jembatan sebagai penyebab langsung kemacetan." },
        { tag: "Reading & Writing", q: "Choose correct subject-verb agreement:", o: ["Neither of the boys are ready.", "Neither of the boys is ready.", "Neither of the boy is ready.", "Neither of boys is ready."], a: 1, e: "'Neither' dianggap tunggal, sehingga memakai 'is'." }
      ]
    },
    {
      id: "to-k10",
      levelId: "k10",
      judul: "Try Out Simulasi SAT — Level Kelas 10 (Siap Tes)",
      durasiMenit: 30,
      soal: [
        { tag: "Matematika", q: "Akar-akar dari x² - 7x + 12 = 0 adalah?", o: ["3 dan 4", "2 dan 6", "-3 dan -4", "1 dan 12"], a: 0, e: "(x-3)(x-4)=0 → x=3 atau x=4." },
        { tag: "Matematika", q: "Titik puncak dari y = x² - 6x + 8 adalah?", o: ["(3, -1)", "(3, 1)", "(-3, -1)", "(6, 8)"], a: 0, e: "x = -b/2a = 3, y = 9-18+8 = -1." },
        { tag: "Matematika", q: "Nilai sin 45° adalah?", o: ["√2/2", "1/2", "√3/2", "1"], a: 0, e: "Nilai sudut istimewa: sin 45° = √2/2." },
        { tag: "Matematika", q: "Peluang muncul mata dadu lebih dari 4 pada satu lemparan dadu?", o: ["1/3", "1/2", "1/6", "2/3"], a: 0, e: "Lebih dari 4: {5,6} → 2/6 = 1/3." },
        { tag: "Matematika", q: "Median dari data 3, 7, 7, 9, 15 adalah?", o: ["7", "9", "8", "15"], a: 0, e: "Data ke-3 (tengah) dari 5 data terurut adalah 7." },
        { tag: "Matematika", q: "Keliling lingkaran jari-jari 10 cm (π ≈ 3,14)?", o: ["62,8 cm", "31,4 cm", "100 cm", "20 cm"], a: 0, e: "Keliling = 2 × 3,14 × 10 = 62,8 cm." },
        { tag: "Reading & Writing", q: "Choose the sentence with correct parallel structure:", o: ["He enjoys swimming, hiking, and to camp.", "He enjoys swimming, hiking, and camping.", "He enjoys to swim, hiking, and camping.", "He enjoys swim, hike, and camp."], a: 1, e: "Ketiga aktivitas harus berbentuk gerund yang konsisten: swimming, hiking, camping." },
        { tag: "Reading & Writing", q: 'Passage: "Though the report was brief, its implications were profound, prompting immediate policy changes." Apa yang dapat disimpulkan?', o: ["The report had no real impact.", "The report significantly influenced policy despite its length.", "The report was ignored.", "The report was very long."], a: 1, e: "Meski singkat ('brief'), laporan itu berdampak besar hingga mengubah kebijakan." },
        { tag: "Reading & Writing", q: "Survei: 70% remote, 20% kantor, 10% netral. Kesimpulan paling didukung data?", o: ["Office work is most popular.", "Remote work is the most preferred option.", "No one prefers remote work.", "All respondents prefer office work."], a: 1, e: "70% adalah proporsi tertinggi dibanding opsi lainnya." },
        { tag: "Reading & Writing", q: "Choose the sentence without a dangling modifier:", o: ["Having finished the exam, the classroom was left by the students.", "Having finished the exam, the students left the classroom.", "The classroom, having finished the exam, was left.", "Finished the exam, students left classroom having."], a: 1, e: "Frasa 'having finished the exam' harus menerangkan pelaku, yaitu 'the students'." }
      ]
    }
  ]
};
