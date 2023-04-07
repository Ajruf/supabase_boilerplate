import { createClient } from "https://cdn.skypack.dev/@supabase/supabase-js@2.14.0"

const supabaseUrl = 'https://ngojdtfmnxqgixjxdykv.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5nb2pkdGZtbnhxZ2l4anhkeWt2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzkzMzAzNzIsImV4cCI6MTk5NDkwNjM3Mn0.KaBRg47s6uwwYE8xFaff_8IY6y3EL40__9mQk-J9wVo'
const supabase = createClient(supabaseUrl, supabaseKey)

let { data: Books, error } = await supabase
  .from('Books')
  .select('*')

for(let Book of Books) {
  let BookList = document.getElementById('Books');
  BookList.innerHTML += `<tr>${Book.Title} - ${Book.Author} - ${Book.ISBN}</tr>`;
}

