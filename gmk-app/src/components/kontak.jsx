import React, { useState } from "react";
function Kontak() {
  // export default function ContactForm({ onSuccess }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Nama wajib diisi.";
    if (!form.email.trim()) e.email = "Email wajib diisi.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Format email tidak valid.";
    if (!form.message.trim()) e.message = "Pesan tidak boleh kosong.";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((err) => ({ ...err, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const eObj = validate();
    setErrors(eObj);
    if (Object.keys(eObj).length) return;

    setSubmitting(true);
    setSubmitted(false);

    try {
      // Simulate network request. Replace with your API call, e.g.:
      // await axios.post('/api/contact', form);
      await new Promise((res) => setTimeout(res, 900));

      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
      if (onSuccess) onSuccess();
    } catch (err) {
      // handle error (show toast or set form-level error)
      console.error("Submit error:", err);
      setErrors((prev) => ({ ...prev, submit: "Gagal mengirim. Coba lagi." }));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div class="card text-start mx-auto w-75 my-5">
      <div class="card-body p-md-4 p-0">
        <div class="card-header text-center py-3">
          <h4 class="mb-0">Kontak Kami</h4>
        </div>

        {submitted && (
          <div class="alert alert-success" role="alert">
            Pesan berhasil dikirim. Terima kasih! ✅
          </div>
        )}

        {errors.submit && (
          <div class="alert alert-danger" role="alert">
            {errors.submit}
          </div>
        )}

        <div className="container">
          <form action="https://formsubmit.co/afika.nashwa.shafira@gmail.com" method="POST" className="mt-4">
            <div class="form-floating mb-3">
              <input
                id="name"
                name="name"
                type="text"
                class={`form-control ${errors.name ? "is-invalid" : ""}`}
                value={form.name}
                onChange={handleChange}
                placeholder="Nama anda" 
                disabled={submitting}
              />
              <label htmlFor="name" class="form-label">
                Nama
              </label>
              {errors.name && <div class="invalid-feedback">{errors.name}</div>}
            </div>

            <div class="form-floating mb-3">
              <input
                id="email"
                name="email"
                type="email"
                class={`form-control ${errors.email ? "is-invalid" : ""}`}
                value={form.email}
                onChange={handleChange}
                placeholder="name@example.com"
                disabled={submitting}
              />
              <label htmlFor="email" class="form-label">
                Email
              </label>
              {errors.email && (
                <div class="invalid-feedback">{errors.email}</div>
              )}
            </div>

            <div class="form-floating mb-3">
              <textarea
                id="message"
                name="message"
                style="height: 100px"
                class={`form-control ${errors.message ? "is-invalid" : ""}`}
                value={form.message}
                onChange={handleChange}
                placeholder="Tulis pesanmu di sini..."
                disabled={submitting}
              />
              <label htmlFor="message" class="form-label">
                Pesan
              </label>
              {errors.message && (
                <div class="invalid-feedback">{errors.message}</div>
              )}
            </div>

            <div class="row d-flex align-items-center justify-content-between">
              <div className="col-md-3 col-12">
                <button
                  type="submit"
                  class="btn btn-primary"
                  disabled={submitting}
                >
                  {submitting ? (
                    <>
                      <span
                        class="spinner-border spinner-border-sm me-2"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      Mengirim...
                    </>
                  ) : (
                    "Kirim Pesan"
                  )}
                </button>

                <button
                  type="button"
                  class="btn btn-outline-secondary ms-2"
                  onClick={() => setForm({ name: "", email: "", message: "" })}
                  disabled={submitting}
                >
                  Reset
                </button>
              </div>

              <small className="text-muted col-md-4 col-12">
                atau email langsung ke{" "}
                <a href="https://mail.google.com/mail/?view=cm&to=afika.nashwa.shafira@gmail.com" target="_blank">afika.nashwa.shafira@gmail.com</a>
              </small>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Kontak;

// return (
//    <div class="card text-center mx-auto w-75">
//     <div class="card-header">
//         Kontak Kami
//     </div>
//     <div class="card-body">
//         <div class="">
//             <h5 class="mb-3">Informasi Kontak</h5>
//             <p><i class="fas fa-phone-alt me-2 text-primary"></i> <strong>Telepon:</strong> 187 AMI 03</p>
//             <p><i class="fas fa-user me-2 text-primary"></i> <strong>Penanggung Jawab:</strong> Cristiani
//                 Promotion SAP</p>
//         </div>
//     </div>
//     {/* <div class="">
//         <h5 class="mb-3">Layanan Cepat</h5>
//         <div class="d-grid gap-2 justify-content-center">
//             <button class="btn btn-outline-primary">
//                 <i class="fas fa-file-alt me-2"></i>Permohonan Sertifikat
//             </button>
//             <button class="btn btn-outline-primary">
//                 <i class="fas fa-question-circle me-2"></i>Konsultasi K3
//             </button>
//         </div> */}
//     {/* </div> */}
// </div>
// )
