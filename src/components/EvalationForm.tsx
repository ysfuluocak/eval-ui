import { useState, useEffect } from "react";
import { Button, Form, Slider, Input, Card } from "antd";
import {
  getFromLocalStorage,
  saveToLocalStorage,
  LOCAL_STORAGE_KEY,
} from "../utilities/localStorageUtil";
import { dummyQuestions } from "../utilities/dummyData";

const EvalationForm = () => {
  const [form] = Form.useForm();
  const [currentPage, setCurrentPage] = useState(0);
  const [formValues, setFormValues] = useState({});
  const questionsPerPage = 5;
  const totalPages = Math.ceil(dummyQuestions.length / questionsPerPage);

  useEffect(() => {
    const saved = getFromLocalStorage() || {};
    const merged = { ...saved };

    dummyQuestions.forEach((q) => {
      const key = `rating_${q.id}`;
      if (!(key in merged)) {
        merged[key] = q.value ?? 3; // Default slider value
      }
    });

    setFormValues(merged);
    form.setFieldsValue(merged);
  }, []);

  const paginatedQuestions = () => {
    const start = currentPage * questionsPerPage;
    return dummyQuestions.slice(start, start + questionsPerPage);
  };

  const saveDraft = () => {
    const values = form.getFieldsValue();
    const updated = { ...formValues, ...values };
    setFormValues(updated);
    saveToLocalStorage(updated);
    console.log("Taslak kaydedildi:", updated);
  };

  const handlePageChange = async (next) => {
    const pageKeys = paginatedQuestions().map((q) => `rating_${q.id}`);
    try {
      await form.validateFields(pageKeys);
      saveDraft();
      setCurrentPage(next);
    } catch (err) {
      console.log("Geçersiz alanlar:", err);
    }
  };

  const onFinish = (values) => {
    debugger
    const final = { ...formValues, ...values };
    console.log("Form gönderildi:", final);
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  };

  return (
    <Card
      style={{ 
        width: 800,
        margin: "50px auto",
        border: "1px solid #d9d9d9", // Border ekledik
        borderRadius: "8px", // Köşeleri yuvarlak
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", // Gölge efekti
        padding: "24px" // İç boşluk
      }}
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
      >
        {paginatedQuestions().map((q) => (
          <Form.Item
            key={q.id}
            name={`rating_${q.id}`}
            label={q.text}
            rules={[{ required: true, message: "Lütfen bir değer seçin" }]}
          >
            <Slider min={1} max={5} step={1} />
          </Form.Item>
        ))}

        {currentPage === totalPages - 1 && (
          <Form.Item name="comment" label="Genel Yorum">
            <Input.TextArea rows={4} />
          </Form.Item>
        )}

        <Form.Item>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {currentPage > 0 ? (
              <Button
                type="primary"
                htmlType="button"
                onClick={() => handlePageChange(currentPage - 1)}
              >
                Önceki
              </Button>
            ) : (
              <div />
            )}

            {currentPage === totalPages - 1 ? (
              <Button type="primary" htmlType="submit">
                Gönder
              </Button>
            ) : (
              <Button
                type="primary"
                htmlType="button"
                onClick={() => handlePageChange(currentPage + 1)}
              >
                Sonraki
              </Button>
            )}
          </div>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default EvalationForm;
