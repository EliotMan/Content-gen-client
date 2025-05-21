import { useState } from 'react';
import Input from './component/ui/Input';
import Button from './component/ui/Button';
import Textarea from './component/ui/Textarea';

function App() {
  const [topic, setTopic] = useState('');
  const [tone, setTone] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const generateContent = async () => {
    setLoading(true);
    const response = await fetch('http://localhost:5000/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ topic, tone })
    });
    const data = await response.json();
    setResult(data.content);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow">
        <h1 className="text-2xl font-bold mb-4">AI Content Generator</h1>
        <div className="mb-4">
          <Input
            placeholder="Enter your topic..."
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <Input
            placeholder="Enter tone (e.g., professional, casual)"
            value={tone}
            onChange={(e) => setTone(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <Button onClick={generateContent} disabled={loading}>
            {loading ? 'Generating...' : 'Generate'}
          </Button>
        </div>
        <Textarea
          value={result}
          rows={10}
          readOnly
          placeholder="Generated content will appear here..."
          className="w-full"
        />
      </div>
    </div>
  );
}

export default App;
