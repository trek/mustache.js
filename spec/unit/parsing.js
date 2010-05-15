describe 'Mustache.to_html'
  it "should clear the context after each run"
    Mustache.to_html("{{#list}}{{x}}{{/list}}", {list: [{x: 1}]})
    Mustache.to_html("{{#list}}{{x}}{{/list}}", {list: [{}]}).should.eql('')
  end
  
  describe 'array_of_strings'
    it 'should generate the correct html'
      view = json_fixture('array_of_strings.js')
      template = fixture('array_of_strings.html')
      rendered = fixture('array_of_strings.txt')
      Mustache.to_html(template,view).should.eql(rendered)
    end
    
    it 'should sendFun the correct html'
      view = json_fixture('array_of_strings.js')
      template = fixture('array_of_strings.html')
      rendered = fixture('array_of_strings.txt')
      
      chunks = []
      sendFun = function(chunk) {
        if (chunk != "") {
          chunks.push(chunk)
        }
      }

      Mustache.to_html(template, view, null, sendFun)
      chunks.join("\n").should.eql(rendered)
    end
  end
  
  describe 'array_of_strings_options'
    it 'should generate the correct html'
      view = json_fixture('array_of_strings_options.js')
      template = fixture('array_of_strings_options.html')
      rendered = fixture('array_of_strings_options.txt')
      Mustache.to_html(template,view).should.eql(rendered)
    end
    
    it 'should sendFun the correct html'
      view = json_fixture('array_of_strings_options.js')
      template = fixture('array_of_strings_options.html')
      rendered = fixture('array_of_strings_options.txt')
      
      chunks = []
      sendFun = function(chunk) {
        if (chunk != "") {
          chunks.push(chunk)
        }
      }

      Mustache.to_html(template, view, null, sendFun)
      chunks.join("\n").should.eql(rendered)
    end
  end
  
  describe 'comments'
    it 'should generate the correct html'
      view = json_fixture('comments.js')
      template = fixture('comments.html')
      rendered = fixture('comments.txt')
      Mustache.to_html(template,view).should.eql(rendered)
    end
    
    it 'should sendFun the correct html'
      view = json_fixture('comments.js')
      template = fixture('comments.html')
      rendered = fixture('comments.txt')
      
      chunks = []
      sendFun = function(chunk) {
        if (chunk != "") {
          chunks.push(chunk)
        }
      }

      Mustache.to_html(template, view, null, sendFun)
      chunks.join("\n").should.eql(rendered)
    end
  end
  
  describe 'complex'
    it 'should generate the correct html'
      view = json_fixture('complex.js')
      template = fixture('complex.html')
      rendered = fixture('complex.txt')
      Mustache.to_html(template,view).should.eql(rendered)
    end
    
    it 'should sendFun the correct html'
      view = json_fixture('complex.js')
      template = fixture('complex.html')
      rendered = fixture('complex.txt')
      
      chunks = []
      sendFun = function(chunk) {
        if (chunk != "") {
          chunks.push(chunk)
        }
      }

      Mustache.to_html(template, view, null, sendFun)
      chunks.join("\n").should.eql(rendered)
    end
  end
  
  describe 'delimiters'
    it 'should generate the correct html'
      view = json_fixture('delimiters.js')
      template = fixture('delimiters.html')
      rendered = fixture('delimiters.txt')
      Mustache.to_html(template,view).should.eql(rendered)
    end
    
    it 'should sendFun the correct html'
      view = json_fixture('delimiters.js')
      template = fixture('delimiters.html')
      rendered = fixture('delimiters.txt')
      
      chunks = []
      sendFun = function(chunk) {
        if (chunk != "") {
          chunks.push(chunk)
        }
      }

      Mustache.to_html(template, view, null, sendFun)
      chunks.join("\n").should.eql(rendered)
    end
  end
  
  describe 'empty_template'
    it 'should generate the correct html'
      view = json_fixture('empty_template.js')
      template = fixture('empty_template.html')
      rendered = fixture('empty_template.txt')
      Mustache.to_html(template,view).should.eql(rendered)
    end
    
    it 'should sendFun the correct html'
      view = json_fixture('empty_template.js')
      template = fixture('empty_template.html')
      rendered = fixture('empty_template.txt')
      
      chunks = []
      sendFun = function(chunk) {
        if (chunk != "") {
          chunks.push(chunk)
        }
      }

      Mustache.to_html(template, view, null, sendFun)
      chunks.join("\n").should.eql(rendered)
    end
  end
  
  describe 'error_not_found'
    it 'should generate the correct html'
      view = json_fixture('error_not_found.js')
      template = fixture('error_not_found.html')
      rendered = fixture('error_not_found.txt')
      Mustache.to_html(template,view).should.eql(rendered)
    end
    
    it 'should sendFun the correct html'
      view = json_fixture('error_not_found.js')
      template = fixture('error_not_found.html')
      rendered = fixture('error_not_found.txt')
      
      chunks = []
      sendFun = function(chunk) {
        if (chunk != "") {
          chunks.push(chunk)
        }
      }

      Mustache.to_html(template, view, null, sendFun)
      chunks.join("\n").should.eql(rendered)
    end
  end
  
  describe 'escaped'
    it 'should generate the correct html'
      view = json_fixture('escaped.js')
      template = fixture('escaped.html')
      rendered = fixture('escaped.txt')
      Mustache.to_html(template,view).should.eql(rendered)
    end
    
    it 'should sendFun the correct html'
      view = json_fixture('escaped.js')
      template = fixture('escaped.html')
      rendered = fixture('escaped.txt')
      
      chunks = []
      sendFun = function(chunk) {
        if (chunk != "") {
          chunks.push(chunk)
        }
      }

      Mustache.to_html(template, view, null, sendFun)
      chunks.join("\n").should.eql(rendered)
    end
  end
  
  describe 'higher_order_sections'
    it 'should generate the correct html'
      view = json_fixture('higher_order_sections.js')
      template = fixture('higher_order_sections.html')
      rendered = fixture('higher_order_sections.txt')
      Mustache.to_html(template,view).should.eql(rendered)
    end
    
    it 'should sendFun the correct html'
      view = json_fixture('higher_order_sections.js')
      template = fixture('higher_order_sections.html')
      rendered = fixture('higher_order_sections.txt')
      
      chunks = []
      sendFun = function(chunk) {
        if (chunk != "") {
          chunks.push(chunk)
        }
      }

      Mustache.to_html(template, view, null, sendFun)
      chunks.join("\n").should.eql(rendered)
    end
  end
  
  describe 'inverted_section'
    it 'should generate the correct html'
      view = json_fixture('inverted_section.js')
      template = fixture('inverted_section.html')
      rendered = fixture('inverted_section.txt')
      Mustache.to_html(template,view).should.eql(rendered)
    end
    
    it 'should sendFun the correct html'
      view = json_fixture('inverted_section.js')
      template = fixture('inverted_section.html')
      rendered = fixture('inverted_section.txt')
      
      chunks = []
      sendFun = function(chunk) {
        if (chunk != "") {
          chunks.push(chunk)
        }
      }

      Mustache.to_html(template, view, null, sendFun)
      chunks.join("\n").should.eql(rendered)
    end
  end
  
  describe 'null_string'
    it 'should generate the correct html'
      view = json_fixture('null_string.js')
      template = fixture('null_string.html')
      rendered = fixture('null_string.txt')
      Mustache.to_html(template,view).should.eql(rendered)
    end
    
    it 'should sendFun the correct html'
      view = json_fixture('null_string.js')
      template = fixture('null_string.html')
      rendered = fixture('null_string.txt')
      
      chunks = []
      sendFun = function(chunk) {
        if (chunk != "") {
          chunks.push(chunk)
        }
      }

      Mustache.to_html(template, view, null, sendFun)
      chunks.join("\n").should.eql(rendered)
    end
  end
  
  describe 'recursion_with_same_names'
    it 'should generate the correct html'
      view = json_fixture('recursion_with_same_names.js')
      template = fixture('recursion_with_same_names.html')
      rendered = fixture('recursion_with_same_names.txt')
      Mustache.to_html(template,view).should.eql(rendered)
    end
    
    it 'should sendFun the correct html'
      view = json_fixture('recursion_with_same_names.js')
      template = fixture('recursion_with_same_names.html')
      rendered = fixture('recursion_with_same_names.txt')
      
      chunks = []
      sendFun = function(chunk) {
        if (chunk != "") {
          chunks.push(chunk)
        }
      }

      Mustache.to_html(template, view, null, sendFun)
      chunks.join("\n").should.eql(rendered)
    end
  end
  
  describe 'reuse_of_enumerables'
    it 'should generate the correct html'
      view = json_fixture('reuse_of_enumerables.js')
      template = fixture('reuse_of_enumerables.html')
      rendered = fixture('reuse_of_enumerables.txt')
      Mustache.to_html(template,view).should.eql(rendered)
    end
    
    it 'should sendFun the correct html'
      view = json_fixture('reuse_of_enumerables.js')
      template = fixture('reuse_of_enumerables.html')
      rendered = fixture('reuse_of_enumerables.txt')
      
      chunks = []
      sendFun = function(chunk) {
        if (chunk != "") {
          chunks.push(chunk)
        }
      }

      Mustache.to_html(template, view, null, sendFun)
      chunks.join("\n").should.eql(rendered)
    end
  end
  
  describe 'section_as_context'
    it 'should generate the correct html'
      view = json_fixture('section_as_context.js')
      template = fixture('section_as_context.html')
      rendered = fixture('section_as_context.txt')
      Mustache.to_html(template,view).should.eql(rendered)
    end
    
    it 'should sendFun the correct html'
      view = json_fixture('section_as_context.js')
      template = fixture('section_as_context.html')
      rendered = fixture('section_as_context.txt')
      
      chunks = []
      sendFun = function(chunk) {
        if (chunk != "") {
          chunks.push(chunk)
        }
      }

      Mustache.to_html(template, view, null, sendFun)
      chunks.join("\n").should.eql(rendered)
    end
  end
  
  describe 'simple'
    it 'should generate the correct html'
      view = json_fixture('simple.js')
      template = fixture('simple.html')
      rendered = fixture('simple.txt')
      Mustache.to_html(template,view).should.eql(rendered)
    end
    
    it 'should sendFun the correct html'
      view = json_fixture('simple.js')
      template = fixture('simple.html')
      rendered = fixture('simple.txt')
      
      chunks = []
      sendFun = function(chunk) {
        if (chunk != "") {
          chunks.push(chunk)
        }
      }

      Mustache.to_html(template, view, null, sendFun)
      chunks.join("\n").should.eql(rendered)
    end
  end
  
  describe 'two_in_a_row'
    it 'should generate the correct html'
      view = json_fixture('two_in_a_row.js')
      template = fixture('two_in_a_row.html')
      rendered = fixture('two_in_a_row.txt')
      Mustache.to_html(template,view).should.eql(rendered)
    end
    
    it 'should sendFun the correct html'
      view = json_fixture('two_in_a_row.js')
      template = fixture('two_in_a_row.html')
      rendered = fixture('two_in_a_row.txt')
      
      chunks = []
      sendFun = function(chunk) {
        if (chunk != "") {
          chunks.push(chunk)
        }
      }

      Mustache.to_html(template, view, null, sendFun)
      chunks.join("\n").should.eql(rendered)
    end
  end
  
  describe 'unescaped'
    it 'should generate the correct html'
      view = json_fixture('unescaped.js')
      template = fixture('unescaped.html')
      rendered = fixture('unescaped.txt')
      Mustache.to_html(template,view).should.eql(rendered)
    end
    
    it 'should sendFun the correct html'
      view = json_fixture('unescaped.js')
      template = fixture('unescaped.html')
      rendered = fixture('unescaped.txt')
      
      chunks = []
      sendFun = function(chunk) {
        if (chunk != "") {
          chunks.push(chunk)
        }
      }

      Mustache.to_html(template, view, null, sendFun)
      chunks.join("\n").should.eql(rendered)
    end
  end
  
  describe 'unknown_pragma'
    it 'should generate the correct html'
      view = json_fixture('unknown_pragma.js')
      template = fixture('unknown_pragma.html')
      rendered = fixture('unknown_pragma.txt')
      -{ Mustache.to_html(template,view)}.should.throw_error("This implementation of mustache doesn't understand the 'I-HAVE-THE-GREATEST-MUSTACHE' pragma")
    end
    
    it 'should sendFun the correct html'
      view = json_fixture('unknown_pragma.js')
      template = fixture('unknown_pragma.html')
      rendered = fixture('unknown_pragma.txt')
      
      chunks = []
      sendFun = function(chunk) {
        if (chunk != "") {
          chunks.push(chunk)
        }
      }
      -{ Mustache.to_html(template, view, null, sendFun) }.should.throw_error("This implementation of mustache doesn't understand the 'I-HAVE-THE-GREATEST-MUSTACHE' pragma")
    end
  end
  
  describe 'array_partial'
    it 'should generate the correct html'
      view = json_fixture('array_partial.js')
      template = fixture('array_partial.html')
      partials = {'partial': fixture('array_partial.2.html')}
      rendered = fixture('array_partial.txt')
      Mustache.to_html(template,view, partials).should.eql(rendered)
    end
    
    it 'should sendFun the correct html'
      view = json_fixture('array_partial.js')
      template = fixture('array_partial.html')
      partials = {'partial': fixture('array_partial.2.html')}
      rendered = fixture('array_partial.txt')
      
      chunks = []
      sendFun = function(chunk) {
        if (chunk != "") {
          chunks.push(chunk)
        }
      }

      Mustache.to_html(template, view, partial_context, sendFun)
      chunks.join("\n").should.eql(rendered)
    end
  end
  
  describe 'empty_partial'
    it 'should generate the correct html'
      view = json_fixture('empty_partial.js')
      template = fixture('empty_partial.html')
      partials = {'partial': fixture('empty_partial.2.html')}
      rendered = fixture('empty_partial.txt')
      Mustache.to_html(template,view, partials).should.eql(rendered)
    end
    
    it 'should sendFun the correct html'
      view = json_fixture('empty_partial.js')
      template = fixture('empty_partial.html')
      partials = {'partial': fixture('empty_partial.2.html')}
      rendered = fixture('empty_partial.txt')
      
      chunks = []
      sendFun = function(chunk) {
        if (chunk != "") {
          chunks.push(chunk)
        }
      }

      Mustache.to_html(template, view, partial_context, sendFun)
      chunks.join("\n").should.eql(rendered)
    end
  end
  
  describe 'template_partial'
    it 'should generate the correct html'
      view = json_fixture('template_partial.js')
      template = fixture('template_partial.html')
      partials = {'partial': fixture('template_partial.2.html')}
      rendered = fixture('template_partial.txt')
      Mustache.to_html(template,view, partials).should.eql(rendered)
    end
    
    it 'should sendFun the correct html'
      view = json_fixture('template_partial.js')
      template = fixture('template_partial.html')
      partials = {'partial': fixture('template_partial.2.html')}
      rendered = fixture('template_partial.txt')
      
      chunks = []
      sendFun = function(chunk) {
        if (chunk != "") {
          chunks.push(chunk)
        }
      }

      Mustache.to_html(template, view, partial_context, sendFun)
      chunks.join("\n").should.eql(rendered)
    end
  end
  
  describe 'view_partial'
    it 'should generate the correct html'
      view = json_fixture('view_partial.js')
      template = fixture('view_partial.html')
      partials = {'partial': fixture('view_partial.2.html')}
      rendered = fixture('view_partial.txt')
      Mustache.to_html(template,view, partials).should.eql(rendered)
    end
    
    it 'should sendFun the correct html'
      view = json_fixture('view_partial.js')
      template = fixture('view_partial.html')
      partials = {'partial': fixture('view_partial.2.html')}
      rendered = fixture('view_partial.txt')
      
      chunks = []
      sendFun = function(chunk) {
        if (chunk != "") {
          chunks.push(chunk)
        }
      }

      Mustache.to_html(template, view, partial_context, sendFun)
      chunks.join("\n").should.eql(rendered)
    end
  end
  
  
end