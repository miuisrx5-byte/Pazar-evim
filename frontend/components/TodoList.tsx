'use client';

import React, { useState, useEffect } from 'react';
import { Trash2, Plus, CheckCircle2, Circle } from 'react-icons/fa';

interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: string;
  dueDate?: string;
  priority: 'low' | 'medium' | 'high';
  category: string;
}

const STORAGE_KEY = 'pazar-evim-todos';
const CATEGORIES = ['İş', 'Kişisel', 'Alışveriş', 'Sağlık', 'Eğitim'];

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('medium');
  const [category, setCategory] = useState('İş');
  const [filterCategory, setFilterCategory] = useState('Tümü');
  const [filterCompleted, setFilterCompleted] = useState('active'); // 'all', 'active', 'completed'
  const [mounted, setMounted] = useState(false);

  // Local Storage'dan veri yükle
  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setTodos(JSON.parse(saved));
      } catch (error) {
        console.error('Error loading todos:', error);
      }
    }
  }, []);

  // Local Storage'a veri kaydet
  useEffect(() => {
    if (mounted) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    }
  }, [todos, mounted]);

  const addTodo = () => {
    if (!input.trim()) return;

    const newTodo: Todo = {
      id: Date.now().toString(),
      text: input,
      completed: false,
      createdAt: new Date().toISOString(),
      dueDate,
      priority,
      category,
    };

    setTodos([newTodo, ...todos]);
    setInput('');
    setDueDate('');
    setPriority('medium');
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  // Filtreleme
  let filteredTodos = todos;

  if (filterCategory !== 'Tümü') {
    filteredTodos = filteredTodos.filter((todo) => todo.category === filterCategory);
  }

  if (filterCompleted === 'active') {
    filteredTodos = filteredTodos.filter((todo) => !todo.completed);
  } else if (filterCompleted === 'completed') {
    filteredTodos = filteredTodos.filter((todo) => todo.completed);
  }

  const stats = {
    total: todos.length,
    completed: todos.filter((t) => t.completed).length,
    active: todos.filter((t) => !t.completed).length,
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800 border-red-300';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'low':
        return 'bg-green-100 text-green-800 border-green-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getPriorityLabel = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'Yüksek';
      case 'medium':
        return 'Orta';
      case 'low':
        return 'Düşük';
      default:
        return priority;
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
        <h1 className="text-3xl font-bold mb-2">📝 Yapılacaklar Listesi</h1>
        <p className="opacity-90">Görevlerinizi yönetin ve önceliklendirilmiş tutun</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 border-b">
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-600">{stats.total}</div>
          <div className="text-xs text-gray-600 mt-1">Toplam</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-orange-600">{stats.active}</div>
          <div className="text-xs text-gray-600 mt-1">Aktif</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-600">{stats.completed}</div>
          <div className="text-xs text-gray-600 mt-1">Tamamlanan</div>
        </div>
      </div>

      {/* Input Alanı */}
      <div className="p-6 border-b bg-gray-50">
        <div className="space-y-3">
          {/* Metin Girdisi */}
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addTodo()}
              placeholder="Yeni görev ekleyin..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={addTodo}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <Plus size={18} />
              Ekle
            </button>
          </div>

          {/* Seçenekler */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* Kategori */}
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            >
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

            {/* Öncelik */}
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value as 'low' | 'medium' | 'high')}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            >
              <option value="low">Düşük Öncelik</option>
              <option value="medium">Orta Öncelik</option>
              <option value="high">Yüksek Öncelik</option>
            </select>

            {/* Bitiş Tarihi */}
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
          </div>
        </div>
      </div>

      {/* Filtreler */}
      <div className="p-4 border-b bg-white sticky top-0 z-10">
        <div className="flex flex-wrap gap-2">
          {/* Kategori Filtreleri */}
          <button
            onClick={() => setFilterCategory('Tümü')}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
              filterCategory === 'Tümü'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Tümü
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                filterCategory === cat
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="flex gap-2 mt-3 flex-wrap">
          <button
            onClick={() => setFilterCompleted('active')}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
              filterCompleted === 'active'
                ? 'bg-orange-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Aktif
          </button>
          <button
            onClick={() => setFilterCompleted('completed')}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
              filterCompleted === 'completed'
                ? 'bg-green-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Tamamlanan
          </button>
          <button
            onClick={() => setFilterCompleted('all')}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
              filterCompleted === 'all'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Hepsi
          </button>
        </div>
      </div>

      {/* Todo Listesi */}
      <div className="divide-y">
        {filteredTodos.length === 0 ? (
          <div className="p-8 text-center text-gray-500">
            <p className="text-lg">Henüz görev yok</p>
            <p className="text-sm mt-1">Yukarıda yeni bir görev ekleyerek başlayın!</p>
          </div>
        ) : (
          filteredTodos.map((todo) => (
            <div
              key={todo.id}
              className={`p-4 hover:bg-gray-50 transition-colors ${
                todo.completed ? 'bg-gray-50' : ''
              }`}
            >
              <div className="flex items-start gap-3">
                {/* Checkbox */}
                <button
                  onClick={() => toggleTodo(todo.id)}
                  className="mt-1 text-2xl text-blue-600 hover:text-blue-700 transition-colors flex-shrink-0"
                >
                  {todo.completed ? (
                    <CheckCircle2 />
                  ) : (
                    <Circle />
                  )}
                </button>

                {/* Görev İçeriği */}
                <div className="flex-1 min-w-0">
                  <p
                    className={`${
                      todo.completed
                        ? 'line-through text-gray-400'
                        : 'text-gray-800'
                    } break-words`}
                  >
                    {todo.text}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {/* Kategori Badge */}
                    <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded border border-blue-300">
                      {todo.category}
                    </span>

                    {/* Öncelik Badge */}
                    <span
                      className={`inline-block px-2 py-1 text-xs rounded border ${
                        getPriorityColor(todo.priority)
                      }`}
                    >
                      {getPriorityLabel(todo.priority)}
                    </span>

                    {/* Bitiş Tarihi */}
                    {todo.dueDate && (
                      <span className="inline-block px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded border border-purple-300">
                        📅 {new Date(todo.dueDate).toLocaleDateString('tr-TR')}
                      </span>
                    )}
                  </div>
                </div>

                {/* Sil Butonu */}
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="text-red-600 hover:text-red-700 transition-colors flex-shrink-0 mt-1"
                  title="Sil"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Footer */}
      {todos.some((t) => t.completed) && (
        <div className="p-4 bg-gray-50 border-t text-center">
          <button
            onClick={clearCompleted}
            className="text-red-600 hover:text-red-700 text-sm font-medium"
          >
            Tamamlananları Temizle
          </button>
        </div>
      )}
    </div>
  );
}
