#!/bin/bash

# Create the (tabs) folder if it doesn't exist
mkdir -p "app/(tabs)"

echo "Creating tab screens in app/(tabs)..."

# 1. Início (Home) Screen
cat << 'EOF' > "app/(tabs)/index.tsx"
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the Início (Home) Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  text: {
    fontSize: 18
  }
});
EOF

# 2. Débitos Screen
cat << 'EOF' > "app/(tabs)/debitos.tsx"
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DebitosScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the Débitos Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  text: {
    fontSize: 18
  }
});
EOF

# 3. Destaques Screen
cat << 'EOF' > "app/(tabs)/destaques.tsx"
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DestaquesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the Destaques Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  text: {
    fontSize: 18
  }
});
EOF

# 4. Agendamentos Screen
cat << 'EOF' > "app/(tabs)/agendamentos.tsx"
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AgendamentosScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the Agendamentos Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  text: {
    fontSize: 18
  }
});
EOF

# 5. Notícias Screen
cat << 'EOF' > "app/(tabs)/noticias.tsx"
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function NoticiasScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the Notícias Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  text: {
    fontSize: 18
  }
});
EOF

echo "Tab screens created successfully!"
