<script>
	import Icon from '@iconify/svelte';
	
	let isOpen = false;
	let inputMessage = '';
	let messages = [
		{ role: 'assistant', text: 'Hello! Welcome to Speedynucho Auto. How can I help you with your vehicle today?' }
	];
	let isLoading = false;
	let chatWindow;

	const quickReplies = [
		{ 
			icon: "mdi:map-marker-outline", 
			label: "Location & Hours", 
			text: "Where are you located and what are your opening hours?" 
		},
		{ 
			icon: "mdi:package-variant-closed", 
			label: "Delivery Options", 
			text: "Do you offer delivery or upcountry shipping?" 
		},
		{ 
			icon: "mdi:wrench-outline", 
			label: "Book a Service", 
			text: "I want to book my car in for a mechanical checkup or service." 
		},
		{ 
			icon: "mdi:magnify", 
			label: "Check Part Fitment", 
			text: "How do I make sure a spare part will fit my specific car model?" 
		}
	];

	function handleQuickReply(text) {
		inputMessage = text;
		sendMessage();
	}

	function typeWriter(fullText, messageIndex, speed = 15) {
		let currentText = '';
		let charIndex = 0;
		
		messages[messageIndex].text = '';

		const interval = setInterval(() => {
			if (charIndex < fullText.length) {
				currentText += fullText.charAt(charIndex);
				messages[messageIndex].text = currentText;
				charIndex++;
				scrollToBottom();
			} else {
				clearInterval(interval);
			}
		}, speed);
	}

	// Enhanced safe markdown link handler supporting complete query strings
	function parseMarkdown(text) {
		if (!text) return '';
		let html = text
			.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
			.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
			// Matches both standard store links and long URL-encoded WhatsApp api links perfectly
			.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
		return html;
	}

	function scrollToBottom() {
		if (chatWindow) {
			setTimeout(() => {
				chatWindow.scrollTop = chatWindow.scrollHeight;
			}, 50);
		}
	}

	async function sendMessage() {
		if (!inputMessage.trim() || isLoading) return;

		const userMessage = inputMessage;
		inputMessage = ''; 
		isLoading = true;

		messages = [...messages, { role: 'user', text: userMessage }];
		scrollToBottom();

		try {
			const res = await fetch('/api/chat', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ message: userMessage })
			});

			const data = await res.json();
			
			// Catch rate limit blocks (status 429 handled implicitly via missing data.reply) or general responses
			if (data.reply) {
				const newMsgIndex = messages.length;
				messages = [...messages, { role: 'assistant', text: '' }];
				typeWriter(data.reply, newMsgIndex);
			} else if (data.error) {
				messages = [...messages, { role: 'assistant', text: data.error }];
			} else {
				messages = [...messages, { role: 'assistant', text: 'Sorry, I am facing connectivity issues right now.' }];
			}
		} catch (err) {
			messages = [...messages, { role: 'assistant', text: 'Error sending message.' }];
		} finally {
			isLoading = false;
			scrollToBottom();
		}
	}

	function toggleChat() {
		isOpen = !isOpen;
		if (isOpen) scrollToBottom();
	}
</script>

<div class="fixed bottom-6 right-6 z-50 font-sans flex flex-col items-end">
	
	{#if isOpen}
		<div class="w-80 sm:w-96 h-[450px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden mb-4 transition-all duration-200 ease-in-out">
			
			<div class="bg-blue-600 text-white px-4 py-3 flex justify-between items-center shadow-md">
				<div class="flex items-center gap-2">
					<div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
					<span class="font-semibold tracking-wide">Speedynucho Assistant</span>
				</div>
				<button on:click={toggleChat} class="text-white hover:text-gray-200 text-xl font-bold focus:outline-none">
					&times;
				</button>
			</div>

			<div bind:this={chatWindow} class="flex-1 overflow-y-auto p-4 bg-gray-50 flex flex-col gap-3">
				{#each messages as msg}
					<div class="max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm whitespace-pre-wrap chat-bubble
						{msg.role === 'user' 
							? 'bg-blue-600 text-white self-end rounded-br-none' 
							: 'bg-white text-gray-800 self-start rounded-bl-none border border-gray-100'}"
					>
						{@html parseMarkdown(msg.text)}
					</div>
				{/each}
				
				{#if isLoading}
					<div class="bg-white text-gray-400 self-start p-3 rounded-2xl rounded-bl-none border border-gray-100 text-sm italic shadow-sm animate-pulse">
						Typing...
					</div>
				{/if}
			</div>

			{#if messages.length === 1 && !isLoading}
				<div class="px-4 py-2 bg-gray-50 flex flex-wrap gap-2 border-t border-gray-100">
					{#each quickReplies as reply}
						<button 
							type="button"
							on:click={() => handleQuickReply(reply.text)}
							class="inline-flex items-center gap-1.5 text-xs bg-white text-gray-600 border border-gray-200 px-2.5 py-1.5 rounded-full hover:border-blue-500 hover:text-blue-600 transition shadow-sm text-left"
						>
							<Icon icon={reply.icon} class="w-4 h-4 text-gray-500" />
							<span>{reply.label}</span>
						</button>
					{/each}
				</div>
			{/if}

			<form on:submit|preventDefault={sendMessage} class="flex border-t border-gray-200 bg-white p-2 gap-2">
				<input 
					type="text" 
					bind:value={inputMessage} 
					placeholder="Ask about servicing, delivery, timing..." 
					disabled={isLoading}
					class="flex-1 px-3 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 disabled:bg-gray-100"
				/>
				<button 
					type="submit" 
					disabled={isLoading}
					class="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-blue-700 transition disabled:bg-gray-400"
				>
					Send
				</button>
			</form>
		</div>
	{/if}

	<button 
		on:click={toggleChat} 
		class="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-xl hover:bg-blue-700 hover:scale-105 transition-all duration-200 focus:outline-none"
	>
		{#if isOpen}
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-6 h-6">
				<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
			</svg>
		{:else}
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
				<path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a.598.598 0 01-.655-.005.598.598 0 01-.207-.58a9.054 9.054 0 01.39-2.54C3.835 16.507 3 14.349 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
			</svg>
		{/if}
	</button>

</div>

<style>
	.fixed { position: fixed; }
	.z-50 { z-index: 50; }
	
	/* Style standard product and business links */
	:global(.chat-bubble a) {
		color: #1e40af;
		text-decoration: underline;
		font-weight: 600;
	}
	:global(.bg-blue-600 a) {
		color: #ffffff !important;
		text-decoration: underline;
	}
	
	/* Special styling for dynamic WhatsApp call-to-action links inside the chat box */
	:global(.chat-bubble a[href*="wa.me"]) {
		display: inline-flex;
		align-items: center;
		background-color: #25d366;
		color: white !important;
		padding: 0.35rem 0.75rem;
		border-radius: 0.5rem;
		text-decoration: none !important;
		margin-top: 0.5rem;
		font-weight: 500;
		box-shadow: 0 1px 3px rgba(0,0,0,0.1);
		transition: opacity 0.2s;
	}
	:global(.chat-bubble a[href*="wa.me"]:hover) {
		opacity: 0.9;
	}
</style>
