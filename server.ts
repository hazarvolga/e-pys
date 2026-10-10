import express from 'express';
import { GoogleGenAI } from '@google/genai';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Initialize Gemini Client
const apiKey = process.env.GEMINI_API_KEY || process.env.API_KEY;
let ai: GoogleGenAI | null = null;
if (apiKey && apiKey !== 'MY_GEMINI_API_KEY') {
  ai = new GoogleGenAI({ apiKey });
}

// AI e-PYS & openBIM Assistant Endpoint
app.post('/api/gemini/epys-assistant', async (req, res) => {
  try {
    const { message, history } = req.body;
    if (!message) {
      return res.status(400).json({ error: 'Mesaj metni gereklidir.' });
    }

    const systemInstruction = `
Sen T.C. Çevre, Şehircilik ve İklim Değişikliği Bakanlığı'nın "e-PYS" (Elektronik Proje Yönetim Sistemi) yönetmeliği, TS EN ISO 19650, TS EN ISO 16739-1 (IFC4/IFC4.3), bSDD (buildingSMART Data Dictionary), IDS ve ALLPLAN / ALUPLAN BIM ekosistemi konusunda uzman bir Baş BIM Danışmanısın.

Soruları yanıtlarken şu resmi teknik detayları ve kuralları esas al:
1. e-PYS Yönetmeliği ve Takvim:
   - 1 Eylül 2027: Tüm Türkiye'de 2B PDF/A formatında dijital teslim zorunluluğu.
   - 1 Eylül 2029: Bursa gibi nüfusu 2 milyonu aşan illerin 600.000'den fazla nüfuslu ilçelerinde (Osmangazi, Yıldırım, Nilüfer vb.) 10.000 m² üzeri binalar için 3B openBIM IFC zorunluluğu.
   - 2032-2033: Tüm ölçekteki diğer tüm yapılar için kademeli IFC zorunluluğu.

2. Katı e-PYS Kuralları:
   - Ek-1 (Proje Kodlama): YIL_IL_ILCE_MAHALLE_ADA_PARSEL_DURUM (Örn: 2026_16_0150_012345_000123_000045_YO).
   - Ek-2 (Dosya İsimlendirme): MM-DUVA-CP-K01-01 (Disiplin-Öge-DosyaTürü-Kat).
   - Ek-3 (Mahal/IfcSpace): K01-OFS-01, standart 3 harfli kısaltmalar (ACM: Açık Mutfak, ASH: Asansör Holü, CPO: Çöp Odası).
   - Madde 12 / Ek-12: MALZEME VE OBJE İSİMLERİ MAKSİMUM 15 KARAKTER OLABİLİR! (Örn: "Seramik_Yer_Kaplamasi_60x60" YASAKTIR, "Seramik_Yer_60" UYGUNDUR).
   - Ek-5 (IFC Kategori Kodları): MM-DVR-Tugla20 (MM=Mimari, DVR=IfcWall/Duvar).
   - Ek-6 (Pset & bSDD/IDS): Zorunlu Property Setler (Pset_WallCommon, Pset_SpaceHeaterTypeCommon, Pset_DoorCommon).
   - Ek-9 (Model Kalite Kontrol): Otomatik otonom yazılım denetimi ve kapı kontrolleri.

3. ALLPLAN ve ALUPLAN Avantajları:
   - ALLPLAN 2026 native bSDD ve IDS entegrasyonu ile otonom Pset eşleştirme.
   - Mahal (IfcSpace) içindeki zemin, duvar, tavan kaplama niteliklerinden OTONOM 3B IfcCovering üretimi (Mimarın manuel 2cm fiziki duvar çizmesine gerek kalmaz!).
   - ALUPLAN yerel e-PYS şablonları ve kütüphaneleri ile 15-karakter sınırına uygun hazır Türkiye çözümleri.
   - Tek İş Akışı (Single Workflow) ile eşzamanlı PDF/A (A4 katları) ve IFC4/4.3 Batch Export.

4. Rakip Karşılaştırma:
   - Revit: DefaultUserDefinedParameterSets.txt metin dosyası hacklemesi, Dynamo script zorunluluğu, ince yapı (IfcCovering) için her odaya manuel 2cm fiziki duvar/zemin çizme zorunluluğu.
   - Archicad: Manuel IFC Translator ayarları ve yerel şablon eksikliği.

Lütfen Türkçe, net, profesyonel, mühendislik hassasiyetinde ve maddeler halinde yanıt ver.
`;

    if (ai) {
      const model = 'gemini-2.5-flash';
      const promptText = `${systemInstruction}\n\nKullanıcı Sorusu: ${message}`;
      const response = await ai.models.generateContent({
        model,
        contents: promptText,
      });

      return res.json({ text: response.text });
    } else {
      // Intelligent Contextual Fallback Engine if GEMINI_API_KEY is not set
      const lower = message.toLowerCase();
      let responseText = '';

      if (lower.includes('15') || lower.includes('karakter') || lower.includes('malzeme') || lower.includes('isim')) {
        responseText = `**e-PYS Madde 12 / Ek-12 Karakter Sınırı Kuralı:**\n\n• **Kural:** Yönetmelik uyarınca BIM modelindeki malzeme ve obje isimleri **maksimum 15 karakter** ile sınırlandırılmıştır.\n• **Hata Örneği:** "Seramik_Yer_Kaplamasi_60x60" (27 karakter) ➔ Ek-9 Model Kalite Kontrol aşamasında otomasyon tarafından **REDDEDİLİR**.\n• **Geçerli Örnek:** "Seramik_Yer_60" (15 karakter) veya "C30_37_Beton" (12 karakter).\n• **ALLPLAN / ALUPLAN Çözümü:** ALUPLAN e-PYS yerel kütüphaneleri, tüm standart malzeme ve elemanları 15 karakter sınırına uygun pre-coded olarak sunar. Tasarımcı isim düzeltmeyle vakit kaybetmez.`;
      } else if (lower.includes('bursa') || lower.includes('takvim') || lower.includes('tarih') || lower.includes('1 eylül') || lower.includes('2029')) {
        responseText = `**Bursa ve Türkiye e-PYS Geçiş Takvimi:**\n\n1. **1 Eylül 2027:** Tüm Türkiye'de 2B dijital paftaların PDF/A formatında onay sistemine yüklenmesi zorunluluğu.\n2. **1 Eylül 2029 (Bursa Kritik Eşiği):** Nüfusu 2.000.000'u geçen illerin (Bursa dâhil) nüfusu 600.000'den fazla olan ilçelerinde (Osmangazi, Nilüfer, Yıldırım) **10.000 m² üzerindeki binalar** için 3B openBIM / IFC teslim zorunluluğu başlar.\n3. **2032 - 2033:** Kademeli olarak tüm diğer konut, ticari ve sanayi yapıları IFC kapsamına alınacaktır.`;
      } else if (lower.includes('covering') || lower.includes('ifccovering') || lower.includes('mahal') || lower.includes('ifcspace') || lower.includes('ince yapı') || lower.includes('metraj')) {
        responseText = `**ALLPLAN'in Devrimsel IfcCovering ve Mahal (IfcSpace) Otomasyonu:**\n\n• **Sorunsal:** e-PYS, mahal kaplamalarının (duvar sıvası, seramik, asma tavan) 3B IFC'de IfcCovering olarak görünmesini ister.\n• **Revit Yöntemi (Sıkıntılı):** Mimarın her odanın iç duvarına fiziki olarak 2 cm'lik ek duvar çizmesini gerektirir. Model boyutunu devasa şişirir ve revizyonda patlar.\n• **ALLPLAN Yöntemi (Üstün):** Mimar sadece Mahal (Room) niteliğine "Seramik 60x60" veya "Sıva" yazar. ALLPLAN, IFC Export sırasında ekstra çizim yaptırmadan **otonom olarak IfcCovering objelerini 3B uzayda üretir** ve net metrajı Pset'e yazar!`;
      } else if (lower.includes('revit') || lower.includes('archicad') || lower.includes('karşılaştır') || lower.includes('fark')) {
        responseText = `**ALLPLAN vs Revit vs Archicad Karşılaştırması:**\n\n1. **Pset & bSDD:** ALLPLAN 2026 native bSDD/IDS entegrasyonuna sahiptir. Revit ise karmaşık \`DefaultUserDefinedParameterSets.txt\` dosyaları yazmayı ve Dynamo scriptleri çalıştırmayı zorunlu kılar.\n2. **İnce Yapı (IfcCovering):** ALLPLAN mahal niteliklerinden otonom üretime izin verir. Revit'te her odaya manuel 2cm fiziki duvar çizmek şarttır.\n3. **Lokalizasyon:** ALUPLAN Türkiye e-PYS'ye özel yerel şablonlar sunar. Diğer yazılımlarda ofisin tam zamanlı BIM Yöneticisi istihdam edip şablon yazması gerekir.`;
      } else {
        responseText = `**ALLPLAN e-PYS Dijital Dönüşüm Rehberi:**\n\ne-PYS (Elektronik Proje Yönetim Sistemi), T.C. Çevre, Şehircilik ve İklim Değişikliği Bakanlığı'nın TS EN ISO 19650 ve TS EN ISO 16739-1 (IFC) standartlarında yürürlüğe koyduğu dijital ruhsat yönetmeliğidir.\n\nALLPLAN + ALUPLAN ekosistemi:\n• Native bSDD / IDS uyumluluğu,\n• Otonom IfcCovering ince yapı üretimi,\n• 15-karakter e-PYS yerel şablonları,\n• Tek İş Akışında PDF/A ve IFC4 Batch Export yetenekleriyle Türkiye'deki mimarlık ve mühendislik ofisleri için %100 mevzuat garantisi ve %70'e varan adam/saat tasarrufu sağlar.`;
      }

      return res.json({ text: responseText });
    }
  } catch (error: any) {
    console.error('Gemini API Error:', error);
    res.status(500).json({ error: 'AI asistan yanıt üretirken bir sorun oluştu.' });
  }
});

// Production static file serving or Dev Vite mounting
async function createServer() {
  const isProd = process.env.NODE_ENV === 'production';

  if (!isProd) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom',
    });
    app.use(vite.middlewares);

    app.use('*', async (req, res, next) => {
      const url = req.originalUrl;
      try {
        let template = await import('fs').then((fs) =>
          fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8')
        );
        template = await vite.transformIndexHtml(url, template);
        res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
      } catch (e: any) {
        vite.ssrFixStacktrace(e);
        next(e);
      }
    });
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

createServer();
