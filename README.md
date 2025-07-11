
# 🏋️‍♂️ Smart Fit - Consulta de Unidades

Projeto desenvolvido para listar unidades da Smart Fit com filtros por horário e status de funcionamento, como parte de um teste técnico.

---

## 🔎 Funcionalidades

- ✅ Carregamento de dados via JSON remoto (`GET`)
- ✅ Filtro por horário (manhã, tarde, noite)
- ✅ Checkbox para exibir unidades fechadas
- ✅ Contador de resultados encontrados (máx. 6)
- ✅ Cards com nome, status, horários e descrição
- ✅ Alerta se nenhuma unidade for encontrada
- ✅ Cards exibidos **apenas após clique** no botão
- ✅ Exibição condicional de aviso sobre unidades fechadas
- ✅ Suporte a exibição de ícones por tipo de máscara (`optional`, `required`, `not_required`)

---

## 💻 Tecnologias Utilizadas

- Angular 18 (Standalone Components)
- TypeScript
- Tailwind CSS
- HTML / CSS

---

## 📁 Estrutura de Pastas

```
src/
├── app/
│   ├── components/
│   │   ├── header/
│   │   ├── cards/
│   │   └── footer/
│   ├── pages/
│   │   └── smart-fit/
│   └── services/
│       └── smart-api.service.ts
```
---

## 📡 Fonte de Dados

Os dados são obtidos via `GET`:

```
https://test-frontend-developer.s3.amazonaws.com/data/locations.json
```

---

## 📌 Interface dos Dados

```ts
interface Location {
  id: number;
  title: string;
  content: string;
  opened: boolean;
  mask: 'required' | 'not_required' | 'optional';
  schedules: { weekdays: string; hour: string }[];
}
```

---

## 💡 Lógica de Filtro (Status + Horário)

```ts
// Quando checkbox "Exibir fechadas" estiver marcado
if (this.exibirFechadas) return !local.opened;

// Quando checkbox NÃO estiver marcado
if (!local.opened) return false;

// Se horário estiver selecionado, filtra por ele
return this.horarioSelecionado
  ? local.schedules.some((s) => s.hour.includes(this.horarioSelecionado))
  : true;
```

---

## 🧠 Aprendizado com `some()` e `includes()`

Durante o desenvolvimento, utilizei os métodos `some()` e `includes()` para filtrar os horários de funcionamento de cada unidade.

### 🧩 Como funcionam:

- `some()` percorre um array e retorna `true` se **pelo menos um** item atender a condição.
- `includes()` verifica se uma **string contém** outra.

### 🧪 Exemplo aplicado no projeto:

```ts
local.schedules.some(schedule =>
  schedule.hour.includes(this.horarioSelecionado)
);
```

💡 Isso garante que, se o horário da unidade contiver o valor selecionado (ex: "06h" dentro de "06h às 12h"), a unidade será exibida nos resultados filtrados.

---

## 🖼️ Imagens do Projeto

 Tela Inicial 
![Home](public/assets/images/smart.png)
---

## 🚀 Como Executar o Projeto

```bash
# Instale as dependências
npm install

# Rode o servidor Angular
ng serve
```

Acesse no navegador: `http://localhost:4200`

---

## 🧪 Como Testar

1. Escolha um horário (manhã, tarde ou noite)
2. Clique em **"Encontrar unidade"**
3. (Opcional) Marque a checkbox **"Exibir unidades fechadas"**
4. Veja os cards sendo exibidos
5. Clique em **"Limpar"** para resetar

---

## 🤝 Autor

**William Araújo**  
🔗 [GitHub: william3002](https://github.com/william3002)

Projeto desenvolvido como desafio técnico com foco em lógica, boas práticas Angular e uso de métodos de array de forma prática.
