# 🧠 Agent 1 – Scenario Spec

### ✅ Mô tả

**Output của Agent 1 là tập hợp các user flow đã được cấu trúc hóa từ tài liệu sản phẩm.**

---

### 📦 Output format

```yaml
features:
  - name: <feature_name>

    flows:
      - name: <flow_name>
        description: <optional>

        steps:
          - <user_action_1>
          - <user_action_2>
          - <user_action_3>
```

---

### 📌 Nguyên tắc

* Mô tả theo **user behavior**
* Không chứa:

  * test case
  * expected
  * UI action (touch/input)

---

# ⚙️ Agent 2 – Test Scenario

### ✅ Mô tả

**Output của Agent 2 là danh sách testcases ở mức logic (QA-level), bao gồm steps và expected result.**

---

### 📦 Output format

```yaml
feature: <feature_name>

testcases:
  - id: TC_<FEATURE>_001
    name: <testcase_name>

    precondition:
      - <optional>

    steps:
      - <test_step_1>
      - <test_step_2>

    expected:
      - <expected_result_1>
      - <expected_result_2>
```

---

### 📌 Nguyên tắc

* Viết như **manual test**
* Không chứa:

  * action (touch, input, swipe…)
  * selector (text_contains, resource_id…)
* Có đủ:

  * happy path
  * negative case (nếu có)

---

# 🤖 Agent 3 – AutoMobile YAML

### ✅ Mô tả

**Output của Agent 3 là YAML testcase hoàn chỉnh, có thể chạy trực tiếp trên AutoMobile tool.**

---

### 📦 Output format

```yaml
id: TC_<FEATURE>_001
name: <testcase_name>
description: <optional>

setup:
  setup_app: true

steps:
  - action: <action_name>
    <params>

asserts:
  - type: <assert_type>
    <params>
```

(Theo đúng spec AutoMobile )

---

### 📌 Nguyên tắc

* Mỗi step phải là **UI action cụ thể**
* Phải có:

  * selector (text_contains / resource_id…)
* Mapping từ step của Agent 2 → action

---

# 🔥 Tóm tắt 1 dòng (rất quan trọng)

| Agent   | Vai trò                |
| ------- | ---------------------- |
| Agent 1 | Hiểu user flow         |
| Agent 2 | Thiết kế test logic    |
| Agent 3 | Sinh automation script |

---

# ✅ Rule để không bị overlap

* Agent 1: **User làm gì**
* Agent 2: **Test cái gì**
* Agent 3: **Test bằng cách nào**