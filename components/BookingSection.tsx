'use client';

export default function BookingSection() {
  return (
    <section className="booking" id="buchen">
      <div className="wrap">
        <div className="booking-grid">
          <div className="booking-left reveal">
            <div className="eyebrow booking-eyebrow">
              <span className="bar"></span>
              <span>Design Call buchen</span>
            </div>
            <h2 className="booking-h" data-reveal-words>
              <span>Dein erster </span>
              <span>Schritt</span>
              <br />
              <span>zu </span>
              <span>
                <em>deinem</em>{' '}
              </span>
              <span>Raum.</span>
            </h2>
            <p className="booking-lede">
              Buche direkt deinen Termin. 90 Minuten, online, ganz ohne Verpflichtung.
              Wir besprechen deinen Raum, deine Wünsche und den nächsten Schritt.
            </p>
          </div>

          <div className="booking-widget reveal">
            <iframe
              src="https://cal.eu/nermin-el-rifaey/30min?theme=dark&brandColor=c46a4f&layout=month_view&hideEventTypeDetails=false&embed=true"
              width="100%"
              height="660"
              frameBorder="0"
              scrolling="no"
              title="Design Call buchen"
              style={{ borderRadius: '4px', display: 'block' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
