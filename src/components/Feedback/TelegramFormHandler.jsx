import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function TelegramFormHandler() {
  const token = "7481464032:AAFEdO1T-E4InF5lwXfzJQkXe2DrzxS7fgU";
  const chatId = "-4708115294";

  useEffect(() => {
    const form = document.getElementById("contact-form");
    const status = document.getElementById("status");

    const handleSubmit = async (e) => {
      e.preventDefault();

      const formData = new FormData(form);
      const name = formData.get("name")?.trim();
      const surname = formData.get("surname")?.trim();
      const phoneNumber = formData.get("phoneNumber")?.trim();
      const commentary = formData.get("commentary")?.trim();

      const message = `<b>Новая заявка</b>\n\nИмя: ${name}\nФамилия: ${surname}\nТелефон: ${phoneNumber}\nКомментарий: ${commentary}`;
      if (name && surname && phoneNumber && commentary) {
        try {
          const response = await fetch(
            `https://api.telegram.org/bot${token}/sendMessage`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                chat_id: chatId,
                text: message,
                parse_mode: "HTML",
              }),
            }
          );

          const data = await response.json();

          if (data.ok) {
            toast.success("Успешно отправлено!");
            form.reset();
          } else {
            toast.error("Ошибка при отправке");
          }
        } catch (error) {
          console.error(error);
          toast.error("Ошибка соединения");
        }
      } else {
        toast.error("Заполните поля");
      }
    };

    form.addEventListener("submit", handleSubmit);

    // Удаляем обработчик при размонтировании
    return () => {
      form.removeEventListener("submit", handleSubmit);
    };
  }, []);

  return <ToastContainer />;
}
